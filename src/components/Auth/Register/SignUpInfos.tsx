import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomInput from "../../Form/CustomInput/CustomInput";
import { StyleType, CustomButton } from "../../Form/CustomButton/CustomButton";
import {RadioInput} from "../../Form/RadioInput/RadioInput";

export const SignUpScreen = ({ nextStep }: any) => {
    const [sex, setSex] = useState<string>("1");
    const [firstname, setFirstname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [errorMessage, setError] = useState("");

    const onRegisterPressed = () => {
        if(!firstname || !password || !passwordRepeat) {
            Alert.alert("Veuillez renseigner tous les champs");
        } else {
            nextStep();
        }
    }

    return (
        <View style={{ height: '100%' }}>
            <View style={{ marginBottom: 14 }}>
                <RadioInput
                    setValue={(values: string[]) => setSex(values.length > 0 ? values[0] : "1")}
                    value={sex}
                    multiple={false}
                    list={
                        [
                            {
                                label: 'Homme',
                                id: "1"
                            },
                            {
                                label: 'Femme',
                                id: "0"
                            }
                        ]
                    } />
            </View>

            <CustomInput
                label={"Entrez votre prénom"}
                placeholder="Prénom"
                value={firstname}
                setValue={setFirstname}
            />

            <CustomInput
                label={"Date  de naissance"}
                placeholder="Date de naissance"
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

            {errorMessage.length > 0 && <Text style={styles.text_error}>{errorMessage}</Text>}

            <CustomButton
                text="Continuer"
                onPress={onRegisterPressed}
                type={StyleType.PRIMARY}
                style={{
                    marginTop: 'auto'
                }}
            />
        </View>
    );
};

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
