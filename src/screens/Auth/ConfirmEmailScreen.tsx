import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import { StyleType, CustomButton } from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/CustomButton/SocialSignInButtons";
import {CommonActions, useNavigation} from "@react-navigation/native";

export const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'Home',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                },
            })
        );
    }

    const onSignInPressed = () => {
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

    const onResendPressed = () => {
        console.warn("resend code");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirmez votre email</Text>

            <CustomInput
                placeholder="Entrez votre code de confirmation"
                value={code}
                setValue={setCode}
            />

            <CustomButton
                text="Confirmez"
                onPress={onConfirmPressed}
                type={StyleType.PRIMARY}
            />

            <CustomButton
                text="Re-envoyer le code"
                onPress={onResendPressed}
                type={StyleType.SECONDARY}
            />

            <CustomButton
                text="Retour à la page de connexion"
                onPress={onSignInPressed}
                type={StyleType.TERTIARY}
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'grey',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    }
});

export default ConfirmEmailScreen;
