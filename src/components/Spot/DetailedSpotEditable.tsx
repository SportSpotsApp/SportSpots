import React, {useState} from "react";
import {Text, Image, StyleSheet, ScrollView, TextInput} from "react-native";
import {CustomButton, StyleType} from "../CustomButton/CustomButton";
import {CommonActions} from "@react-navigation/native";
import {Custompicker} from "../CustomPicker/CustomPicker";
import FirebaseRequest from "../../API/spotAPI";
import SpotClass from "../../models/Spot";

const api = new FirebaseRequest()

interface DetailedSpotType {
    route: any;
}

const DetailedSpotEditable = ({ route }: DetailedSpotType) => {

    const [spot, setSpot] = useState<any>(route.params.spot);

    const [spotSport, setSpotSport] = useState(spot.sport);
    const sportList =
        [["Football", "football"],
            ["Basketball", "basketball"],
            ["Volleyball", "volleyball"],
            ["Tennis", "tennis"],
            ["Handball", "handball"],
            ["Badminton", "badminton"],
            ["Hockey", "hockey"],
            ["Baseball", "baseball"],
            ["Cycling", "cycling"],
            ["Running", "running"],
            ["Swimming", "swimming"],
            ["Other", "other"]];

    const onUpdateSpot = () => {
        api.modifySport(spot.spotId, spotSport);
        api.modifyDesc(spot.spotId, spot.spotDesc)
        api.modifyLongDesc(spot.spotId, spot.spotLongDesc)
    }

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{uri: spot.image}}
                style={styles.image}
            />

            <Text style={styles.time}>Lien de l'image</Text>
            <TextInput style={styles.people} defaultValue={spot.image}/>

            <Text style={styles.time}>Sport</Text>
            <Custompicker
                value={spotSport}
                setValue={setSpotSport}
                mode="dropdown"
                list={sportList}
            />

            <Text style={styles.time}>Description courte</Text>
            <TextInput style={styles.description} numberOfLines={2} defaultValue={spot.spotDesc}/>

            <Text style={styles.time}>
                Créé par {spot.author}, le{' '}
                <Text style={styles.date}>{spot.createAt}</Text>
            </Text>

            <Text style={styles.localisation}>
                {spot.spotPostalCode}, {spot.spotCityName}
            </Text>

            <Text style={styles.time}>Description longue</Text>
            <TextInput style={styles.longDescription} defaultValue={spot.spotLongDesc}/>

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
