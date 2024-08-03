import L from 'leaflet';
import iconMaps from '../../assets/images/point3.png'

const IconMap = new L.Icon({
    iconUrl: iconMaps,
    iconSize: [30, 45],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default IconMap;

