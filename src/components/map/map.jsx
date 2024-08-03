import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useRef } from "react";
import IconMap from "../map/iconmap"
import Button from "../buttons/button";
import { ShareIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'

const Map = ({ lat, long }) => {
    const mapRef = useRef(null);
    const latitude = lat;
    const longitude = long;

    return (
        <div className=" relative h-full w-full">
            <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} className="absolute h-full w-full z-0">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={[latitude, longitude]}
                    icon={IconMap}// Use the selected icon
                >
                </Marker>

                {/* Additional map layers or components can be added here */}
            </MapContainer>
            <div className="absolute flex space-x-3 top-4 right-4 z-70">
                <Button className="bg-white hover:bg-opacity-70 text-green border-2 border-green px-5 py-3 rounded-lg flex items-center space-x-2">
                    <ShareIcon className="h-5 w-5 text-green" />
                    <span>Share</span>
                </Button>
                <Button className="bg-white hover:bg-opacity-70 text-green border-2 border-green px-5 py-3 rounded-lg flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-green"></MapPinIcon>
                <span>Google Maps</span>
                </Button>
            </div>
        </div>

    )
}

export default Map
