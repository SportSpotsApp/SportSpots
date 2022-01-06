import React, { useState } from "react";
import { Text, Image, StyleSheet, ScrollView, TextInput } from "react-native";
import { CustomButton, StyleType } from "../Form/CustomButton/CustomButton";
import { CustomPicker } from "../Form/CustomPicker/CustomPicker";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { SportList } from "../../models/Sport";

interface DetailedSpotType {
    route: any;
}

const DetailedSpotEditable = ({ route }: DetailedSpotType) => {

    const navigation = useNavigation();

    const [spot, setSpot] = useState<any>(route.params.spot);

    const [image, setImage] = useState(spot.image);
    const [desc, setDesc] = useState(spot.description);
    const [longDesc, setLongDesc] = useState(spot.longDescription);

    const [spotSport, setSpotSport] = useState(spot.sport);

    const onUpdateSpot = () => {
        console.log("image: " + longDesc);
    }

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: spot.image }}
                style={styles.image}
            />

            <Text style={styles.time}>Lien de l'image</Text>
            <TextInput style={styles.people} defaultValue={spot.image} onChangeText={setImage} />

            <Text style={styles.time}>Sport</Text>
            <CustomPicker
                value={spotSport}
                setValue={setSpotSport}
                mode="dropdown"
                list={SportList}
            />

            <Text style={styles.time}>Description courte</Text>
            <TextInput style={styles.description} numberOfLines={2} defaultValue={spot.spotDesc} onChangeText={setDesc} />

            <Text style={styles.time}>
                Créé par {spot.author}, le{' '}
                <Text style={styles.date}>{spot.createAt}</Text>
            </Text>

            <Text style={styles.localisation}>
                {spot.spotPostalCode}, {spot.spotCityName}
            </Text>

            <Text style={styles.time}>Description longue</Text>
            <TextInput style={styles.longDescription} defaultValue={spot.spotLongDesc} onChangeText={setLongDesc} />

            <CustomButton
                text="Enregistrer"
                onPress={onUpdateSpot}
                type={StyleType.PRIMARY}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: "cover",
        borderRadius: 10,
    },
    people: {
        marginVertical: 10,
        color: '#7b7b7b',
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    time: {
        fontSize: 18,
        color: '#7b7b7b',
        marginVertical: 10,
    },
    date: {
        fontWeight: "bold",
    },
    localisation: {
        color: '#7b7b7b',
        textDecorationLine: "underline",
    },
    longDescription: {
        fontSize: 16,
        lineHeight: 24,
        marginVertical: 20,
    },
});

export default DetailedSpotEditable;
