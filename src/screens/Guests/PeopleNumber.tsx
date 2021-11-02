import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, FlatList, Pressable} from "react-native";

const PeopleNumber = (props:any) => {

    const [minimal, setMinimal] = useState(0);
    const [current, setCurrent] = useState(0);
    const [maximal, setMaximal] = useState(0);

    return (
        <View>
            {/*Row 1 : minimal People*/}
            <View style={styles.row}>
                {/*Titles*/}
                <View>
                    <Text style={{fontWeight: "bold"}}>
                        Minimal
                    </Text>
                    <Text style={{color: '#8d8d8d'}}>
                         Nombre de personnes minimal
                    </Text>
                </View>
                {/*Buttons*/}
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    {/* - */}
                    <Pressable
                        onPress={() => setMinimal(Math.max(0, minimal - 1))}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                    </Pressable>

                    {/* value */}
                    <Text style={{marginHorizontal: 20, fontSize: 16}}>{minimal}</Text>

                    {/* + */}
                    <Pressable
                        onPress={() => setMinimal(minimal + 1)}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            {/*Row 2 : current People*/}
            <View style={styles.row}>
                {/*Titles*/}
                <View>
                    <Text style={{fontWeight: "bold"}}>
                        Actuel
                    </Text>
                    <Text style={{color: '#8d8d8d'}}>
                        Nombre de personnes actuellement
                    </Text>
                </View>
                {/*Buttons*/}
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    {/* - */}
                    <Pressable
                        onPress={() => setCurrent(Math.max(0, current - 1))}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                    </Pressable>

                    {/* value */}
                    <Text style={{marginHorizontal: 20, fontSize: 16}}>{current}</Text>

                    {/* + */}
                    <Pressable
                        onPress={() => setCurrent(current + 1)}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            {/*Row 3 : max People*/}
            <View style={styles.row}>
                {/*Titles*/}
                <View>
                    <Text style={{fontWeight: "bold"}}>
                        Maximal
                    </Text>
                    <Text style={{color: '#8d8d8d'}}>
                        Nombre de personnes maximal
                    </Text>
                </View>
                {/*Buttons*/}
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    {/* - */}
                    <Pressable
                        onPress={() => setMaximal(Math.max(minimal, maximal - 1))}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
                    </Pressable>

                    {/* value */}
                    <Text style={{marginHorizontal: 20, fontSize: 16}}>{maximal}</Text>

                    {/* + */}
                    <Pressable
                        onPress={() => setMaximal(maximal + 1)}
                        style={styles.button}
                    >
                        <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>
            <Pressable
                style={styles.searchButton}
                onPress={() => console.warn("search clicked")}>
                <Text style={
                    {
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'bold',
                    }
                }>
                    Suivant
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: "center",
        alignItems: "center",
    },
    searchButton: {
        marginBottom: 20,
        height: 40,
        backgroundColor: '#748c94',
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        borderRadius: 10,
    }
});

export default PeopleNumber;
