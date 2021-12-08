import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView, Alert} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import { StyleType, CustomButton } from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/CustomButton/SocialSignInButtons";
import {CommonActions, useNavigation} from "@react-navigation/native";

import auth from "@react-native-firebase/auth";

export const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [errorMessage, setError] = useState("");

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        if(!username || !email || !password || !passwordRepeat)
        {
            Alert.alert("Veuillez renseigner tous les champs");
        }
        else
        {
            let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let alpha = /^[a-zA-Z]+$/;
            if(!regEmail.test(email))
            {
                setError("Veillez renseigner un email valide");
                return;
            }else if(password !== passwordRepeat)
            {
                setError("Les mots de passe ne sont pas identiques");
                return;
            }else if(!alpha.test(username))
            {
                setError("Votre nom ne peut pas contenir de chiffres");
                return;
            }
            auth().createUserWithEmailAndPassword(email, password)
                .then((userCredentials:any) => {
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
                .catch((error=>setError(error.message)))
        }
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

    const onTermsOfUsePressed = () => {
        console.warn("terms of use");
    }

    const onPrivacyPressed = () => {
        console.warn("privacy")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Créer un compte</Text>

            {!!errorMessage && <Text style={styles.text_error}> {errorMessage} </Text>}

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />

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

            <CustomInput
                placeholder="Répétez votre mot de passe"
                value={passwordRepeat}
                setValue={setPasswordRepeat}
                secureTextEntry
            />

            <CustomButton
                text="S'inscrire"
                onPress={onRegisterPressed}
                type={StyleType.PRIMARY}
            />

            <Text style={styles.text}>
                En vous inscrivant, vous confirmez que vous acceptez
                nos{' '}<Text style={styles.link} onPress={onTermsOfUsePressed}>contrats d'utilisation</Text> et notre{' '}
                <Text style={styles.link} onPress={onPrivacyPressed}>politique de confidentialitée</Text>.
            </Text>

            <CustomButton
                text="Vous avez déjà un compte? Connectez-vous"
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
    text_error:{
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
    link: {
        color: '#FDB075',
    },
});

export default SignUpScreen;
