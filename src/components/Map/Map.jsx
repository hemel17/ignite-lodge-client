import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [37.4450377, 25.3259658];
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="min-w-full min-h-[60vh] my-6 md:my-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Ignite Lodge</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
