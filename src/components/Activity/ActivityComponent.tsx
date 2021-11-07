import React from "react";
import {Text, Image, StyleSheet, Pressable} from "react-native";
import {CommonActions, useNavigation} from "@react-navigation/native";
import Activity from "../../models/Activity";

interface ActivityType {
    activity: Activity;
}

const ActivityComponent = ({ activity }: ActivityType) => {

    const navigation = useNavigation();

    const goToDetailedActivityPage = () => {
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
        <Pressable onPress={goToDetailedActivityPage} style={styles.container}>
            <Image
                source={{uri: activity.image}}
                style={styles.image}
            />

            <Text style={styles.people}>
                Actuel : {activity.currentNumber} - Max : {activity.maximalNumber}
            </Text>

            <Text style={styles.description} numberOfLines={2}>
                {activity.sport} | {activity.activityDesc}
            </Text>

            <Text style={styles.time}>
                {activity.activityTime},{' '}
                <Text style={styles.date}>{activity.activityDate}</Text>
            </Text>

            <Text style={styles.localisation}>
                {activity.activityPostalCode}, {activity.activityCityName}
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

export default ActivityComponent;
