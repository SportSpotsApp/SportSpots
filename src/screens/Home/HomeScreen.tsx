import React from "react";
import {View, Text, StyleSheet, Image, ImageBackground, Pressable} from "react-native";
import {CommonActions, useNavigation} from "@react-navigation/native";

const HomeScreen = () => {

    const navigation = useNavigation();

    const loginPressed = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'SignIn',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                },
            })
        );
    }

    const registerPressed = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'SignUp',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                },
            })
        );
    }

    return (
        <View>
            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
                <View>
                    <Text style={styles.title}>Sport Spots</Text>
                </View>
            </ImageBackground>
            <Pressable
                style={styles.button}
                onPress={loginPressed}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </Pressable>
            <Pressable
                style={styles.buttonOutline}
                onPress={registerPressed}>
                <Text style={styles.buttonOutlineText}>S'inscrire</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: "cover",
        justifyContent: "center",
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: 'blue',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginLeft: 25,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
    },
    buttonOutline: {
        backgroundColor: 'white',
        borderColor: "grey",
        width: 200,
        height: 40,
        borderRadius: 10,
        marginLeft: 25,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonOutlineText: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'blue',
    },
});

export default HomeScreen;
