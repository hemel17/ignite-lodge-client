import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [37.4450377, 25.3259658];
  return (
    <section className="py-6 md:py-10 dark:bg-blue-gray-900">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="min-w-full min-h-[60vh]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Ignite Lodge</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;
