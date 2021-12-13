import { TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import URL_MARKER from '../../../../assets/img/icon-blip.svg';
import * as S from './map.styled';
import 'leaflet/dist/leaflet.css';

const Map = ({location}) => {
  const {latitude, longitude, zoom} = location;

  const icon = new Icon({
    iconUrl: URL_MARKER,
    iconSize: [40, 50],
    iconAnchor: [25, 50],
    zoom: zoom,
  });

return (
  <S.Map center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={icon} position={[latitude, longitude]} />
  </S.Map>
  );
}

export default Map;
