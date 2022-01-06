import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {RadioInput} from "../../Form/RadioInput/RadioInput";
import {CustomButton, StyleType} from "../../Form/CustomButton/CustomButton";

export const SignUpScreen = ({ nextStep }: any) => {
    const [activities, setActivities] = useState<string[]>([]);

    const onRegisterPressed = () => {
        nextStep();
    };

    return (
        <SafeAreaView style={styles.root}>
            <RadioInput
                multiple={true}
                max={3}
                setValue={(activities: string[]) => setActivities(activities)}
                value={activities}
                list={[
                    {
                        label: "Tennis",
                        id: "Tennis"
                    }
                ]}/>

            {activities.length > 0 && <CustomButton
                text="Continuer"
                onPress={onRegisterPressed}
                type={StyleType.PRIMARY}
                style={{
                    marginTop: 'auto'
                }}
            />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
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
