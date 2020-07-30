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
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={11}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     ></GoogleMap>
//   );
// }

// export default Map;

import GoogleMapReact from 'google-map-react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import { Icon } from '@iconify/react';

export function LocationPin() {
  return (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
    </div>
  );
}

function Map({ location, zoomLevel }) {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact defaultCenter={location} defaultZoom={zoomLevel}>
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Map;
