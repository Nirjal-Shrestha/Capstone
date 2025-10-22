import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./map.css";

// Fix default Leaflet marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// 📍 Points of Interest + Models
const poi = [
  {
    id: 1,
    name: "Bus Stop",
    coords: [-37.720633390642845, 145.04632099734553],
    model: "/models/BST.splat",
  },
  {
    id: 2,
    name: "Statue",
    coords: [-37.71987763017671, 145.0464783764545],
    model: "/models/JG-BST.splat",
  },
  {
    id: 3,
    name: "Jenny Graves",
    coords: [-37.72079511810905, 145.0470506813924],
    model: "/models/JG.splat",
  },
  {
    id: 4,
    name: "John Scott Meeting House",
    coords: [-37.719405172981254, 145.05110354716055],
    model: "/models/JSM.splat",
  },
  {
    id: 5,
    name: "Graduate House",
    coords: [-37.71353942258608, 145.05038653906396],
    model: "/models/NR7.splat",
  },
];

export default function MapView() {
  const handleView3D = (modelPath) => {
    const viewerURL = `/splat-viewer.html?src=${encodeURIComponent(modelPath)}`;
    window.open(viewerURL, "_blank");
  };

  return (
    <div className="map-root">
      <div className="map-header">
        <h2>La Trobe University – 3D Campus Map</h2>
      </div>

      <MapContainer
        center={[-37.7199, 145.048]}
        zoom={17}
        scrollWheelZoom
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {poi.map((p) => (
          <Marker key={p.id} position={p.coords}>
            <Popup>
              <b>{p.name}</b>
              <br />
              <button className="model-btn" onClick={() => handleView3D(p.model)}>
                View 3D Model
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
