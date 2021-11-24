import React from "react";
import {View, Text} from "react-native";
import {CustomButton} from "./CustomButton";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {CommonActions, useNavigation} from "@react-navigation/native";

export const SocialSignInButtons = () => {

    const navigation = useNavigation();
    const isConnected = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'ConfirmEmail',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                },
            })
        )
    }

    const onSignInFacebook = () => {
        console.warn("sign in fb");
    }

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    const onSignInApple = () => {
        console.warn("sign in apple");
    }

    return (
        <>
            <CustomButton
                text="Se connecter avec Facebook"
                onPress={onSignInFacebook}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />

            <CustomButton
                text="Se connecter avec Google"
                onPress={onGoogleButtonPress}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />

            <CustomButton
                text="Se connecter avec Apple"
                onPress={onSignInApple}
                bgColor="#e3e3e3"
                fgColor="#363636"
            />
        </>
    )
}

export default SocialSignInButtons;
