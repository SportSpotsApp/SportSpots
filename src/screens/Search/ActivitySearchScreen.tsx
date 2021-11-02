import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, FlatList} from "react-native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";

import searchResults from "../../../assets/data/search";

const ActivitySearchScreen = (props:any) => {

    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.container}>

            {/*Input Component*/}
            <TextInput
                style={styles.textInput}
                placeholder={"Rechercher"}
                value={inputText}
                onChangeText={setInputText}
            />
            <FlatList
                data={searchResults}
                renderItem={({item}) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>

                        </View>
                        <Text style={styles.descText}>
                            {item.description}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        marginBottom: 20,
    },
    container: {
        margin: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
    },
    iconContainer: {
        backgroundColor: '#e7e7e7',
        padding: 7,
        borderRadius: 10,
        marginRight: 15,
    },
    descText: {

    },
});

export default ActivitySearchScreen;
