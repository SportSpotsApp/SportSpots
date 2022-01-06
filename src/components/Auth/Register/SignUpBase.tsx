import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, SafeAreaView } from "react-native";
import CustomInput from "../../Form/CustomInput/CustomInput";
import { StyleType, CustomButton } from "../../Form/CustomButton/CustomButton";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { isEmail } from "../../../utils/validator";
import colors from "../../../theme/colors";

export const SignUpScreen = ({ nextStep }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [errorMessage, setError] = useState("");

    const onRegisterPressed = () => {
        if(!email || !password || !passwordRepeat) {
            Alert.alert("Veuillez renseigner tous les champs");
        } else {
            if(!isEmail(email)) {
                setError("Veillez renseigner un email valide");
            } else if(password !== passwordRepeat) {
                setError("Les mots de passe ne sont pas identiques");
            } else {
                nextStep();
            }
        }
    }

    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 14,
                shadowColor: "#3E68B2",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowRadius: 8.30,
                elevation: 13 }}>
                <CustomButton
                    text="FACEBOOK"
                    onPress={onRegisterPressed}
                    type={StyleType.LIGHT}
                    fgColor={"#3E6AB2"}
                    style={{
                        borderBottomRightRadius: 0,
                        borderTopRightRadius: 0,
                        width: '50%',
                        backgroundColor: 'white',
                        borderWidth: 1.5,
                        borderColor: "#EBEFF6",
                    }}
                />
                <CustomButton
                    text="GOOGLE"
                    onPress={onRegisterPressed}
                    type={StyleType.LIGHT}
                    fgColor={"#EC6A5E"}
                    style={{
                        borderBottomLeftRadius: 0,
                        borderTopLeftRadius: 0,
                        width: '50%',
                        backgroundColor: 'white',
                        borderWidth: 1.5,
                        borderColor: "#EBEFF6",
                        borderLeftWidth: 0
                    }}
                />
            </View>

            <CustomInput
                label={"Adresse email"}
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />

            <CustomInput
                label={"Mot de passe"}
                placeholder="Mot de passe"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />

            <CustomInput
                label={"Répétez votre mot de passe"}
                placeholder="Répétez votre mot de passe"
                value={passwordRepeat}
                setValue={setPasswordRepeat}
                secureTextEntry
            />

            {errorMessage.length > 0 && <Text style={styles.text_error}> {errorMessage}</Text>}

            <CustomButton
                text="Continuer"
                onPress={onRegisterPressed}
                type={StyleType.PRIMARY}
                style={{
                    marginTop: 'auto'
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#080808',
    },
    text: {
        color: 'grey',
        marginVertical: 10,
    },
    text_error:{
        color: '#dd494e',
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
