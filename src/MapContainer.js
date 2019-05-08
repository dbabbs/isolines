import React from 'react';
import { Map, TileLayer, Marker, Polygon } from 'react-leaflet';
import { hereTileUrl } from './here';

class MapContainer extends React.Component {
   constructor(props) {
      super(props);
      this.marker = React.createRef();
      this.map = React.createRef();
   }

   handleMapMove = () => {
      const zoom = this.map.current.viewport.zoom;
      this.props.handleMapMove(zoom);
   }


   handleMarkerDrag = () => {
      const coordinates = this.marker.current.leafletElement.getLatLng();
      const center = [coordinates.lat, coordinates.lng];
      this.props.handleMarkerDrag(center);
   }

   render() {
      return (
         <div className="map">
            <Map
               center={this.props.center}
               zoom={this.props.zoom}
               zoomControl={false}
               attributionControl={false}
               onMoveend={this.handleMapMove}
               ref={this.map}
            >
               <TileLayer
                  url={hereTileUrl('reduced.night')}
               />
               <Marker
                  position={this.props.center}
                  draggable={true}
                  onDragEnd={this.handleMarkerDrag}
                  ref={this.marker}
               />
               {
                  this.props.isolines.map((isoline, i) => {
                     return (
                        <Polygon
                           key={i}
                           fillOpacity={0.05}
                           weight={2}
                           positions={isoline.shape}
                           color={isoline.color}
                        />
                     )
                  })
               }
            </Map>
         </div>
      )
   }

}
export default MapContainer;
