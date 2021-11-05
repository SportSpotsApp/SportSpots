import React from "react";
import SuggestionRow from "./SuggestionRow";
import {GooglePlaceData, GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {Dimensions, StyleSheet} from "react-native";

const GooglePlaceInput = () => {
    return (
        <GooglePlacesAutocomplete
            placeholder='Rechercher un spot'
            minLength={2}
            fetchDetails={true}
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            styles={{
                textInput: styles.searchButtonText,
            }}
            query={{
                key: 'AIzaSyBMUEdWCCYyDXmRxTQPAaquWMD0BEXn-40',
                language: 'fr',
                components: 'country:fr',
                types: '(cities)',
            }}
            suppressDefaultStyles
            renderRow={(item: GooglePlaceData) => {
                return(
                    <SuggestionRow item={item} />
                );
            }}
        />
    );
};

export default GooglePlaceInput;

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
