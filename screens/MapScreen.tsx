import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useTheme } from '@react-navigation/native';
import GOOGLE_MAP_API from '../API';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 45.042768,
    lng: 3.882936
};

const MapScreen = ({navigation}:any) => {

    const { colors } = useTheme();
    const theme = useTheme();
    
    return (
        <LoadScript
            googleMapsApiKey= {GOOGLE_MAP_API}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default MapScreen;
