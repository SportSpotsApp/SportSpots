import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import { StyleType, CustomButton } from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/CustomButton/SocialSignInButtons";
import { CommonActions, useNavigation } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";

export const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const [errorMessage, setError] = useState("");

    const onSignInPressed = () => {
        // validate user
        if (!email || !password) {
            Alert.alert("Veuillez renseigner tous les champs");
        }
        else {
            let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!regEmail.test(email)) {
                setError("Veillez renseigner un email valide")
                return;
            }
            auth().signInWithEmailAndPassword(email, password)
                .then((userCredentials: any) => {
                    const user = userCredentials.user;
                    navigation.dispatch(
                        CommonActions.navigate({
                            name: 'Menu',
                            params: {
                                headerLeft: null,
                                gestureEnabled: false,
                            },
                        })
                    );
                })
                .catch((error => setError(error.message)))
        }
    }

    const onForgotPasswordPressed = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'ForgotPassword',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                },
            })
        );
    }

    const onSignUpPressed = () => {
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
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={require('../../../assets/images/logo.png')}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />

                {!!errorMessage && <Text style={styles.text_error}> {errorMessage} </Text>}

                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Mot de passe"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomButton
                    text="Se connecter"
                    onPress={onSignInPressed}
                    type={StyleType.PRIMARY}
                />

                <CustomButton
                    text="Mot de passe oublié?"
                    onPress={onForgotPasswordPressed}
                    type={StyleType.TERTIARY}
                />

                <CustomButton
                    text="Vous n'avez pas de compte? Créez-en un"
                    onPress={onSignUpPressed}
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    text_error: {
        backgroundColor: '#FB7073',
        color: '#D7484B',
        padding: 2,
        margin: 2,
    },
    text_success: {
        backgroundColor: '#36D297',
        color: '#18A774',
        padding: 2,
        margin: 2,
    },
})

export default SignInScreen;
