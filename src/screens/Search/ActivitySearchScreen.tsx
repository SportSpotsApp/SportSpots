import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, FlatList, Pressable} from "react-native";

import activities from "../../../assets/data/activities";
import Activity from "../../models/Activity";
import ActivityComponent from "../../components/Activity/ActivityComponent";

const ActivitySearchScreen = () => {

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
                data={activities}
                renderItem={({ item }: {item: Activity}) => (
                    <View style={styles.row}>
                        <ActivityComponent activity={item}/>
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
