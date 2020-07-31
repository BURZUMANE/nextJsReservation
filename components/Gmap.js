import React from 'react';
import ReactDOM from 'react-dom';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyATyME8aPrEABRhIh8mtOXnfNdQ8ofNEq0&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ isMarkerShown, location }) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: location.lat, lng: location.lng }}
  >
    <Marker position={{ lat: location.lat, lng: location.lng }} />
  </GoogleMap>
));

export default Map;
