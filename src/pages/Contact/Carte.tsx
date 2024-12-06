import React from "react";
import'./Carte.css';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "1290px",
  height: "400px",
};
const center = {
  lat: 51.503399, 
  lng: -0.119519, 
};

const MapComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB5ffcBvLjZ2JPFe7sI86qU03SICLq7MvI">
      <GoogleMap
        mapContainerStyle={containerStyle} 
        center={center} 
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
