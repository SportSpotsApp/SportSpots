import React from "react";
import {Text, Image, StyleSheet, ScrollView} from "react-native";

interface DetailedSpotType {
    route: any;
}

const DetailedSpot = ({route}: DetailedSpotType) => {

    const {spot} = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{uri: spot.image}}
                style={styles.image}
            />

            <Text style={styles.people}>
                Sport : {spot.sport}
            </Text>

            <Text style={styles.description} numberOfLines={2}>
                {spot.spotDesc}
            </Text>

            <Text style={styles.time}>
                Créé par {spot.author}, le{' '}
                <Text style={styles.date}>{spot.createAt}</Text>
            </Text>

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

export default DetailedSpot;
