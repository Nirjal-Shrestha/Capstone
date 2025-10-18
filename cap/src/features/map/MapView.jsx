import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./map.css";

// Custom pin icon
const defaultIcon = new L.Icon({
  iconUrl: "/markers/pin.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Precise La Trobe Bundoora POIs
const poi = [
  { id: 1, name: "Main Library", lat: -37.719982, lng: 145.048403, category: "Building" },
  { id: 2, name: "Agora", lat: -37.720763, lng: 145.048789, category: "Retail" },
  { id: 3, name: "Chisholm College", lat: -37.723708, lng: 145.049819, category: "Residential" },
  { id: 4, name: "Union Hall", lat: -37.722923, lng: 145.050377, category: "Notable" },
  { id: 5, name: "Glenn College", lat: -37.720733, lng: 145.051600, category: "Residential" },
  { id: 6, name: "Physical Sciences Building", lat: -37.721175, lng: 145.047598, category: "Building" },
  { id: 7, name: "Car Park 1", lat: -37.720075, lng: 145.044857, category: "Car Park" },
  { id: 8, name: "Car Park 2", lat: -37.722295, lng: 145.045602, category: "Car Park" },
  { id: 9, name: "Sylvia Walton Building", lat: -37.721718, lng: 145.050141, category: "Building" },
  { id: 10, name: "La Trobe Business School", lat: -37.720334, lng: 145.049556, category: "Building" },
  { id: 11, name: "Health Sciences Building", lat: -37.720245, lng: 145.045801, category: "Building" },
  { id: 12, name: "Tennis Court", lat: -37.719723, lng: 145.053912, category: "Outdoor" },
];

export default function MapView() {
  const [mapType, setMapType] = useState("default");
  const latrobeCenter = [-37.7205, 145.0470];

  const tiles = {
    default: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    satellite:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  };

  return (
    <div className="map-root">
      {/* Header bar */}
      <div className="map-header">
        <h2>La Trobe University – Bundoora Campus</h2>
        <button
          className="toggle-btn"
          onClick={() =>
            setMapType((prev) => (prev === "default" ? "satellite" : "default"))
          }
        >
          {mapType === "default" ? "Satellite View" : "Map View"}
        </button>
      </div>

      <MapContainer
        center={latrobeCenter}
        zoom={17}
        scrollWheelZoom
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> & Esri'
          url={tiles[mapType]}
        />

        {poi.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]} icon={defaultIcon}>
            <Popup>
              <b>{p.name}</b>
              <br />
              <small>{p.category}</small>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
