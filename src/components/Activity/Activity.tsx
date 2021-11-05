import React from "react";
import {Text, Image, StyleSheet, Pressable} from "react-native";
import {CommonActions, useNavigation} from "@react-navigation/native";

const Activity = (props : any) => {

    const navigation = useNavigation();

    const activity = props.activity;
    const goToActivityPage = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'DetailedActivity',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                    activityId: activity.id,
                },
            })
        );
    }

    return (
        <Pressable onPress={goToActivityPage} style={styles.container}>
            {/*Image, take a picture from the spot*/}
            <Image
                source={{uri: activity.image}}
                style={styles.image}
            />

            {/*Number of people : Current : Max*/}
            <Text style={styles.people}>
                Actuel : {activity.actualNumber} - Max : {activity.maxNumber}
            </Text>

            {/*Sport and description*/}
            <Text style={styles.description} numberOfLines={2}>
                {activity.sport} | {activity.activityDesc}
            </Text>

            {/*Time and Date : 10:45 AM, Mardi 2 Nov */}
            <Text style={styles.time}>
                {activity.hour}:{activity.minutes} {activity.halfOfDay},{' '}
                <Text style={styles.date}>{activity.activityDate}</Text>
            </Text>

            {/*Localisation*/}
            <Text style={styles.localisation}>
                {activity.spotPostalCode}, {activity.spotCityName}
            </Text>
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

export default Activity;
