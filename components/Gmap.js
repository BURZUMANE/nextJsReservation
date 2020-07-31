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
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyATyME8aPrEABRhIh8mtOXnfNdQ8ofNEq0&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ isMarkerShown, location }) => (
  <div>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: location.lat, lng: location.lng }}
    >
      <Marker position={{ lat: location.lat, lng: location.lng }} />
    </GoogleMap>
    {location.lat}
  </div>
));

export default Map;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import locationIcon from '@iconify/icons-mdi/map-marker';
// import { Icon } from '@iconify/react';

// const containerStyle = {
//   width: '400px',
//   height: '400px',
// };

// function LocationPin() {
//   return (
//     <div className="pin">
//       <Icon icon={locationIcon} className="pin-icon" />
//     </div>
//   );
// }

// function Map({ location, zoomLevel }) {
//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);
//   const center = {
//     lat: location.lat,
//     lng: location.lng,
//   };
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyATyME8aPrEABRhIh8mtOXnfNdQ8ofNEq0">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={11}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       ></GoogleMap>
//     </LoadScript>
//   );
// }

// export default Map;

// import GoogleMapReact from 'google-map-react';
// import locationIcon from '@iconify/icons-mdi/map-marker';
// import { Icon } from '@iconify/react';

// export function LocationPin() {
//   return (
//     <div className="pin">
//       <Icon icon={locationIcon} className="pin-icon" />
//     </div>
//   );
// }

// function Map({ location, zoomLevel }) {
//   return (
//     <div className="map">
//       <div className="google-map">
//         <GoogleMapReact defaultCenter={location} defaultZoom={zoomLevel}>
//           <LocationPin
//             lat={location.lat}
//             lng={location.lng}
//             text={location.address}
//           />
//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// }

// export default Map;
