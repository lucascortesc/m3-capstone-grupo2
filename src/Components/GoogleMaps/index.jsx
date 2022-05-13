import { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import axios from "axios";
import { useEffect } from "react";
import { useAllEvents } from "../../Providers/AllEvents";

const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: props.latitude, lng: props.longitude }}
      >
        <Marker position={{ lat: props.latitude, lng: props.longitude }} />
      </GoogleMap>
    );
  })
);

export default MapWithAMarker;
