import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface ClassTypeProps {
    value: string;
    setValue: any;
    mode: "dialog" | "dropdown" | undefined;
}

export enum StyleType {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    TERTIARY = "TERTIARY"
}

export const Custompicker = ({ value, setValue, mode }: ClassTypeProps) => {
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) =>
                    setValue(itemValue)
                }
                mode={mode}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View >
    )
}

const styles: { [key: string]: any; } = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingVertical: 0,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
})
