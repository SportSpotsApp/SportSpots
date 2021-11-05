import React from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, Pressable} from "react-native";
import {CommonActions, useNavigation} from "@react-navigation/native";
import Spot from '../../models/Spot';

interface SpotCarrouselType {
    spot: Spot;
}

const SpotCarrousel = ({ spot }: SpotCarrouselType ) => {
    const width = useWindowDimensions().width;
    const navigation = useNavigation();

    const goToSpotPage = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'DetailedSpot',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                    spotId: spot.id,
                },
            })
        );
    }

    return (
        <Pressable onPress={goToSpotPage} style={[styles.container, {width: width - 60}]}>
            <View style={styles.innerContainer}>
                {/*Image, take a picture from the spot*/}
                <Image
                    source={{uri: spot.image}}
                    style={styles.image}
                />

                <View style={{
                    flex: 1,
                    marginHorizontal: 10,
                }}>
                    {/*Number of people : Current : Max*/}
                    <Text style={styles.people}>
                        Sport : {spot.sport}
                    </Text>

                    {/*Sport and description*/}
                    <Text style={styles.description} numberOfLines={2}>
                        {spot.spotDesc}
                    </Text>

                    {/*Localisation*/}
                    <Text style={styles.localisation}>
                        {spot.spotPostalCode}, {spot.spotCityName}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: "hidden",
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: "cover",
    },
    people: {
        marginVertical: 10,
        color: '#7b7b7b',
    },
    description: {
        fontSize: 15,
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

export default SpotCarrousel;
