import React from 'react';
import { MapContainer, TileLayer, LayersControl, ScaleControl } from 'react-leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const WeatherMap = ({ lat, lon }) => {
  
  return (
    <MapContainer center={[lat, lon]} zoom={10} style={{ height: "400px", width: "100%" }}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Precipitation">
          <TileLayer
            url={`${API_BASE_URL}/weather/precipitation_new/{z}/{x}/{y}.png`}
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Temperature">
          <TileLayer
            url={`${API_BASE_URL}/weather/temp_new/{z}/{x}/{y}.png`}
          />
        </LayersControl.Overlay>
      </LayersControl>
      <ScaleControl position="bottomleft" />
    </MapContainer>
  );
};

WeatherMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};