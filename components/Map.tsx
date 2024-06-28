import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '500px',
    height: '500px'
};

const center = {
    lat: -33.87361540180599, 
    lng: 151.20940954939806,
};

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:"AIzaSyDUhc3SEYAnAL1Bd8oraCd-vNd3UzvS0oM"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    // return isLoaded ? (
    //     <GoogleMap
    //         mapContainerStyle={containerStyle}
    //         center={center}
    //         onLoad={onLoad}
    //         onUnmount={onUnmount}
    //         clickableIcons={true}
    //         zoom={20}
    //     >
    //         { /* Child components, such as markers, info windows, etc. */}
    //         <></>
    //     </GoogleMap>
    // ) : <></>
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.588473796536!2d151.20331459999997!3d-33.87449509999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e0b245b11d7ed7%3A0xb4aab645be4781ab!2sEdge%20Academy!5e0!3m2!1sen!2sau!4v1719558012142!5m2!1sen!2sau"
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    );
}

export default Map