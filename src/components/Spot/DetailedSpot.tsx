import React from "react";
import {View, Text, Image, StyleSheet, ScrollView} from "react-native";

const Spot = (props : any) => {

    const spot = props.spot;

    return (
        <ScrollView style={styles.container}>
            {/*Image, take a picture from the spot*/}
            <Image
                source={{uri: spot.image}}
                style={styles.image}
            />

            {/*Number of people : Current : Max*/}
            <Text style={styles.people}>
                Sport : {spot.sport}
            </Text>

            {/*Sport and description*/}
            <Text style={styles.description} numberOfLines={2}>
                {spot.spotDesc}
            </Text>

            {/*Time and Date : 10:45 AM, Mardi 2 Nov */}
            <Text style={styles.time}>
                Créé par {spot.createBy}, le{' '}
                <Text style={styles.date}>{spot.createDate}</Text>
            </Text>

            {/*Localisation*/}
            <Text style={styles.localisation}>
                {spot.spotPostalCode}, {spot.spotCityName}
            </Text>

            <Text style={styles.longDescription}>
                {spot.spotLongDesc}
            </Text>
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

export default Spot;
