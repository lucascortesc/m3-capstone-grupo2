import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: props.latitude, lng: props.longitude }}
      >
        <Marker position={{ lat: props.latitude, lng: props.longitude }} />
      </GoogleMap>
    );
  })
);

export default MapWithAMarker;
