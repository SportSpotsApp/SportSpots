import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import colors from "../../../theme/colors";
import SignUpBase from "../../../components/Auth/Register/SignUpBase";
import SignUpInfos from "../../../components/Auth/Register/SignUpInfos";
import SignUpSports from "../../../components/Auth/Register/SignUpSports";

export const SignUpScreen = () => {
    const navigation = useNavigation();

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

    const nextStep = () => {
        if(steps.length > stepIndex) {
            setStepIndex(stepIndex+1);
        }
    };

    const onRegister = () => {
        // TOOD : Send data & Wait then display Main App !
    };

    const previousStep = () => {
        if(stepIndex >= 1) {
            setStepIndex(stepIndex-1);
        }
    };

    const [stepIndex, setStepIndex] = useState<number>(1);

    const steps = [
        {
            title: 'Inscrivez-vous',
            infoText: true,
            component: () => <SignUpBase nextStep={nextStep} />
        },
        {
            title: 'Vos informations',
            infoText: false,
            component: () => <SignUpInfos nextStep={nextStep} />
        },
        {
            title: 'Vos sports favoris',
            infoText: false,
            component: () => <SignUpSports nextStep={onRegister}/>
        }
    ];

    const step = steps[stepIndex-1];

    return (
        <SafeAreaView style={styles.root}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', marginBottom: 14, justifyContent: "space-between" }}>
                    <Text style={styles.title}>{step.title}</Text>
                    <Text style={{ color: colors.primary }}>Étape {stepIndex}/3</Text>
                </View>

                {step.component()}

                {step.infoText &&
                    <View>
                        <Text style={styles.text}>
                            En vous inscrivant, vous confirmez que vous acceptez
                            nos{' '}<Text style={styles.link} onPress={onTermsOfUsePressed}>contrats d'utilisation</Text> et notre{' '}
                            <Text style={styles.link} onPress={onPrivacyPressed}>politique de confidentialitée</Text>.
                        </Text>

                        <TouchableOpacity
                            onPress={onSignInPressed}
                            style={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <Text>Vous avez déjà un compte ?</Text>
                            <Text style={{ fontWeight: 'bold' }}> Connectez-vous</Text>
                        </TouchableOpacity>
                    </View>
                }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        height: '100%',
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
