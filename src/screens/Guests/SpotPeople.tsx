import activities from "../../../assets/data/activities";
import Spot from "../../models/Spot";
import SpotComponent from "../../components/Spot/SpotComponent";
import {useState} from "react";
import {FlatList, StyleSheet, TextInput, View} from "react-native";
import SportAPI from "../../API/spotAPI"

const SpotPeople = () => {

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
                renderItem={({ item }: {item: Spot}) => (
                    <View style={styles.row}>
                        <SpotComponent spot={item}/>
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
