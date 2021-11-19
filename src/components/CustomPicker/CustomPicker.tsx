import React from "react";
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface ClassTypeProps {
    selectedLanguage: string;
    setSelectedLanguage: any;
}

export enum StyleType {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    TERTIARY = "TERTIARY"
}

export const Custompicker = ({ selectedLanguage, setSelectedLanguage }: ClassTypeProps) => {
    return (
        <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
    )
}

const styles: { [key: string]: any; } = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },

    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2,
    },

    container_TERTIARY: {

    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_SECONDARY: {
        color: '#3B71F3',
    },

    text_TERTIARY: {
        color: 'grey',
    },
})
