import React from 'react';
import './App.css';
import { hereIsolineUrl, maxIsolineRangeLookup } from './here';

import Sidebar from './Sidebar';
import MapContainer from './MapContainer';

import '@lui/init/dist/lui-init.min'
import '@lui/here-layer-theme/dist/lui-here-layer-theme.min'

class App extends React.Component {

   constructor(props) {
      super(props);

      this.marker = React.createRef();
      this.map = React.createRef();

      this.state = {
         isolines:[
            { color: '#41D38D', shape: [] },
            { color: '#47D59C', shape: [] },
            { color: '#4BD6A4', shape: [] },
            { color: '#52D8B6', shape: [] },
            { color: '#5DDCCF', shape: [] }
         ],
         center: [47.605779, -122.315744],
         mode: 'car',
         range: 10000,
         type: 'distance',
         traffic: false,
         zoom: 12
      }
   }

   updateIsolines = () => {
      const promises = this.state.isolines.map((m,i) => {
         const range = Math.round( i / this.state.isolines.length * this.state.range );
         return fetch(hereIsolineUrl(this.state, range))
            .then(x => x.json())
      });

      Promise.all(promises).then(res => {
         const isolines = this.state.isolines.map((x, i) => {
            if (res[i].response.isoline[0].component.length > 0) {
               x.shape = res[i].response.isoline[0].component[0].shape.map(x => [x.split(',')[0], x.split(',')[1]]);
            } else {
               x.shape = [];
            }
            return x;
         })
         this.setState({ isolines });
      })
   }

   handleMapMove = (zoom) => this.setState({ zoom })

   componentDidMount = () => this.updateIsolines();

   handleMarkerDrag = (center) => this.setState({ center }, () => this.updateIsolines())

   updateOptions = (value, cat) => {
      if (cat === 'type' && this.state.range > maxIsolineRangeLookup[value]) {
         this.setState({
            range: maxIsolineRangeLookup[value]
         })
      }
      this.setState({
         [cat]: value
      }, () => this.updateIsolines())
   }

   updateRange = evt => {
      let range = evt.target.value;
      this.setState({ range }, () => this.updateIsolines())
   }


   render() {
      const max = this.state.type === 'distance' ?
         maxIsolineRangeLookup.distance :
         maxIsolineRangeLookup.time;
      const sliderVal = this.state.range > max ? max : this.state.range;

      return (
         <div className="app">
            <lui-desktoplayer-theme>
               <Sidebar
                  updateOptions={this.updateOptions}
                  updateRange={this.updateRange}
                  max={max}
                  sliderVal={sliderVal}
                  options={this.state}
               />
               <MapContainer
                  isolines={this.state.isolines}
                  center={this.state.center}
                  zoom={this.state.zoom}
                  handleMapMove={this.handleMapMove}
                  handleMarkerDrag={this.handleMarkerDrag}
               />
            </lui-desktoplayer-theme>
         </div>
      );
   }
}
/*

*/

export default App;
