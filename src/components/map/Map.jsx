import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_APIKEY,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
        test(map);
    }, []);

    function test(map) {
        setTimeout(() => {
            const bounds = new window.google.maps.LatLngBounds();
            bounds.extend({ lat: -33.8599358, lng: 151.2090295 });
            map.fitBounds(bounds);
        }, 1000 * 5);
    }

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : (
        <></>
    );
};

export default React.memo(Map);
