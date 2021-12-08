import React from "react";
import {Text, Image, StyleSheet, Pressable} from "react-native";
import {CommonActions, useNavigation} from "@react-navigation/native";
import Spot from "../../models/Spot";

interface SpotType {
    spot: Spot;
}

const ActivityComponent = ({ spot }: SpotType) => {

    const navigation = useNavigation();

    const goToDetailedActivityPage = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'DetailedSpot',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                    spot: spot,
                },
            })
        );
    }

    return (
        <Pressable onPress={goToDetailedActivityPage} style={styles.container}>
            <Image
                source={{uri: spot.image}}
                style={styles.image}
            />

            <Text style={styles.people}>
                {spot.spotCityName} - {spot.spotPostalCode}
            </Text>

            <Text style={styles.description} numberOfLines={2}>
                {spot.spotDesc}
            </Text>

            <Text style={styles.date}>{spot.createdAt}</Text>
        </Pressable>
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
});

export default ActivityComponent;
