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
         color: '#5DDCCF',
         shape: [],
         center: [47.605779, -122.315744],
         mode: 'car',
         range: 1000,
         type: 'time',
         traffic: false,
         zoom: 12
      };
   }

   updateIsoline = () => {
      fetch(hereIsolineUrl(this.state))
      .then(res => res.json())
      .then(res => {
         if (res.response.isoline[0].component.length > 0) {
            const shape = res.response.isoline[0].component[0].shape.map(x => [x.split(',')[0], x.split(',')[1]]);
            this.setState({ shape })
         } else {
            const shape = [];
            this.setState({ shape })
         }
      })
   }

   handleMapMove = (zoom) => this.setState({ zoom });

   componentDidMount = () => this.updateIsoline();

   handleMarkerDrag = (center) => this.setState({ center }, () => this.updateIsoline());

   updateOptions = (value, cat) => {
      if (cat === 'type' && this.state.range > maxIsolineRangeLookup[value]) {
         this.setState({
            range: maxIsolineRangeLookup[value]
         });
      }
      this.setState({
         [cat]: value
      }, () => this.updateIsoline());
   }

   updateRange = evt => {
      let range = evt.target.value;
      this.setState({ range }, () => this.updateIsoline());
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
                  color={this.state.color}
                  isoline={this.state.shape}
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
