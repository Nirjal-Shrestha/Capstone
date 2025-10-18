import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../features/map/map.css"; // optional, if you want custom map styles

export default function CampusMap() {
  useEffect(() => {
    const latrobeCoords = [-37.7205, 145.0470]; // La Trobe Bundoora campus

    const map = L.map("campus-map", {
      center: latrobeCoords,
      zoom: 15,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(latrobeCoords)
      .addTo(map)
      .bindPopup("<b>La Trobe University</b><br>Bundoora Campus")
      .openPopup();

    return () => map.remove();
  }, []);

  return (
    <div
      id="campus-map"
      style={{
        width: "100%",
        height: "60vh",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
    ></div>
  );
}
