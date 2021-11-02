import React from "react";
import {View, Text} from "react-native";
import {CustomButton} from "./CustomButton";

export const SocialSignInButtons = () => {

    const onSignInFacebook = () => {
        console.warn("sign in fb");
    }

    const onSignInGoogle = () => {
        console.warn("sign in google");
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
