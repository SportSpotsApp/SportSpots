import React from "react";
import {View, Text} from "react-native";
import {AnimatedRegion, LatLng, MapEvent, Marker} from "react-native-maps";

interface CustomMarkerType {
    position: LatLng,
    sport: string,
    isSelected: boolean,
    onPress: (event: MapEvent<{ action: 'marker-press'; id: string }>) => void,
}

const CustomMarker = ({ position, sport, isSelected, onPress }: CustomMarkerType ) => {

    return (
        <Marker coordinate={position} onPress={onPress}>
            <View style={{
                backgroundColor: isSelected ? 'black' : 'white',
                padding: 5,
                borderRadius: 20,
                borderColor: 'grey',
                borderWidth: 1,
            }}>
                <Text style={{
                    fontWeight: "bold",
                    color: isSelected ? "white" : "black",
                }}>
                    {sport}
                </Text>
            </View>
        </Marker>
    );
};

export default CustomMarker;
