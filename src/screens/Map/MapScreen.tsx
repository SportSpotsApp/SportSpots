import React, { Component } from 'react';
import {Pressable, StyleSheet, Text, View, Dimensions} from 'react-native';
import {CommonActions, useNavigation} from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SuggestionRow from "./SuggestionRow";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";

const MapScreen = () => {

    const navigation = useNavigation();

    const searchPressed = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'Search',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                },
            })
        );
    }

    return (
            <View>
                <GooglePlacesAutocomplete
                    placeholder='Rechercher un spot'
                    minLength={2}
                    fetchDetails={true}
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    styles={{
                        textInput: styles.searchButtonText,
                        textInputContainer: {
                            height: '100%',
                            width: '100%',
                        }
                    }}
                    query={{
                        key: 'AIzaSyBMUEdWCCYyDXmRxTQPAaquWMD0BEXn-40',
                        language: 'fr',
                        types: '(cities)',
                    }}

                    //suppressDefaultStyles
                    //renderRow={(item) =><SuggestionRow item={item}/>}
                />
                <MapView
                    style={{flex: 1}}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    initialRegion={{
                        latitude: 45.042768,
                        longitude: 3.882936,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    searchButton: {
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get("screen").width - 20,
        borderRadius: 30,
        marginHorizontal: 10,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: 20,
        zIndex: 100,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default MapScreen;
