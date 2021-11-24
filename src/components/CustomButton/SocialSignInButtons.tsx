import React from "react";
import {View, Text} from "react-native";
import {CustomButton} from "./CustomButton";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

export const SocialSignInButtons = () => {
    GoogleSignin.configure({
        webClientId: "911547189138-a8hason64p4cqki0spv3pab30higdere.apps.googleusercontent.com"
    });

    const onSignInFacebook = () => {
        console.warn("sign in fb");
    }

    const onSignInGoogle = async () => {
        console.warn("sign in google");
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            //this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
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
                onPress={onSignInGoogle}
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
