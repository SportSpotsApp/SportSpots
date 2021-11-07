import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import Activity from "../../../assets/data/activities";

interface DetailedActivityType {
    activityId: number;
}

const DetailedActivity = ({ activityId }: DetailedActivityType) => {

    const activity = Activity[activityId];

    return (
        <View style={styles.container}>
            <Image
                source={{uri: activity.image}}
                style={styles.image}
            />

            <Text style={styles.people}>
                Actuel : {activity.currentNumber} - Max : {activity.maximalNumber}
            </Text>

            <Text style={styles.time}>
                {activity.activityTime},{' '}
                <Text style={styles.date}>{activity.activityDate}</Text>
            </Text>

            <Text style={styles.localisation}>
                {activity.activityPostalCode}, {activity.activityCityName}
            </Text>

            <Text style={styles.description}>
                {activity.sport} | {activity.activityLongDesc}
            </Text>
        </View>
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

export default DetailedActivity;
