import React from "react";
import {View, Text} from "react-native";
import {Marker} from "react-native-maps";

const CustomMarker = (props:any) => {
    const {coordinate, sport, isSelected, onPress} = props;
    return (
        <Marker coordinate={coordinate} onPress={onPress}>
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
                    {sport.id}
                </Text>
            </View>
        </Marker>
    );
};

export default CustomMarker;
