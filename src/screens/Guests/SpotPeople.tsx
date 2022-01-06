import React, {useEffect, useMemo, useState} from 'react';
import Spot from "../../models/Spot";
import SpotComponent from "../../components/Spot/SpotComponent";
import {FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import auth from "@react-native-firebase/auth";
import SpotClass from "../../models/Spot";
import {useIsFocused} from "@react-navigation/core";

const SpotPeople = () => {
    const [spots, setSpots] = useState<Spot[]>([]);
    const [inputText, setInputText] = useState('');

    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused) {
            console.log("okeee");
        }
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <Text>Vous avez {spots.length} spots</Text>
            <FlatList
                data={spots}
                renderItem={({ item }: {item: Spot}) => (
                    <View style={styles.row}>
                        <SpotComponent spot={item} canEdit={true} key={item.id}/>
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

export default SpotPeople;
