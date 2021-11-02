import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import { StyleType, CustomButton } from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/CustomButton/SocialSignInButtons";
import {CommonActions, useNavigation} from "@react-navigation/native";

export const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'NewPassword',
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

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Changer votre mot de passe</Text>

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />

            <CustomButton
                text="Envoyer"
                onPress={onSendPressed}
                type={StyleType.PRIMARY}
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

export default ForgotPasswordScreen;
