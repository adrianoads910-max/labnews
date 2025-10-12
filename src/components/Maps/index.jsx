import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


import icon from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import shadow from "leaflet/dist/images/marker-shadow.png";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina, 
  iconUrl: icon, 
  shadowUrl: shadow, 
});


export const MapaLaboratorio = () => {
  const position = [51.505, -0.09];
  const marcadores = [
    { id: 1, pos: [51.505, -0.09], nome: "Unidade Central" },
    { id: 2, pos: [52.1, -0.12], nome: "Filial Norte" },
    { id: 3, pos: [50.9, -0.08], nome: "Filial Sul" },
  ];

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={5}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {marcadores.map((m) => (
          <Marker key={m.id} position={m.pos}>
            <Popup>{m.nome}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
