import React from "react";
import {View, Text, Pressable, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {GooglePlaceData} from "react-native-google-places-autocomplete";

const SuggestionRow = ({ item }: {item: GooglePlaceData}) => {

    const navigation = useNavigation();

    const onClick = () => {
        console.warn("tu as cliqué");
    }

    return (
        <Pressable
            onPress={() => onClick()}
            style={styles.row}
        >
            <Text>
                { item.description }
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
    }
});

export default SuggestionRow;
