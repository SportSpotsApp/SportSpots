import React from "react";
import {View, Text, Pressable, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

const navigation = useNavigation();

const SuggestionRow = ({item}:any) => {
    <Pressable>

    </Pressable>
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
