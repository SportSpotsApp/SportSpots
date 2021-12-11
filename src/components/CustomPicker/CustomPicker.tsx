import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Picker, PickerItemProps } from '@react-native-picker/picker';

interface ClassTypeProps {
    value: string;
    setValue: any;
    mode: "dialog" | "dropdown" | undefined;
    list: string[][]; // ex : [["blue", "blueValue"], [["red", "redValue"]]]
}

export enum StyleType {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    TERTIARY = "TERTIARY"
}

export const Custompicker = ({ value, setValue, mode, list }: ClassTypeProps) => {
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                mode={mode}>
                {list.map((item => <Picker.Item label={item[0]} value={item[1]} key={item[0]}/>))}
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
