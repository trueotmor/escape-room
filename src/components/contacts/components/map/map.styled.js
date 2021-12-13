import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';
import background from '../../../../assets/img/contacts-map.jpg';

export const Map = styled(MapContainer)`
  position: realtive;
  display: flex;
  width: 649px;
  height: 336px;
  margin-left: auto;
  background-image: url(${background});
`;
