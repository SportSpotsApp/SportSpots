import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Picker, PickerItemProps } from '@react-native-picker/picker';
import colors from "../../../theme/colors";

interface ItemType {
    label: string;
    id: string;
}

interface RadioInputType {
    value: string[]|string,
    setValue: any,
    list: ItemType[],
    multiple: boolean,
    max?: number,
}

export const RadioInput = ({  setValue, list, value = [], multiple = false, max }: RadioInputType) => {
    const [values, setValues] = useState<string[]>(value ? Array.isArray(value) ? value : [value] : []);

    const onPress = (id: string) => {
        if(values.includes(id)) {
            setValues(values.filter(item => item !== id));
        } else {
            if((multiple && (!max || values.length < max)) || values.length == 0) {
                const array = values;
                array.push(id);
                setValues(array);
            } else {
                setValues([id]);
            }
        }
    };

    useEffect(() => {
        setValue(values);
    }, [values]);

    console.log(list);

    return (
        <View style={styles.container}>
            {list.map((item: ItemType) => <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.input, values.includes(item.id) ? styles.selectedInput : {}]}
                onPress={() => onPress(item.id)}>
                <Text style={values.includes(item.id) ? styles.selectedText : styles.text}>{item.label}</Text>
            </TouchableOpacity>)}
        </View >
    )
}

const styles: { [key: string]: any; } = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    text: {
        fontWeight: 'bold',
        color: colors.primary,
        fontSize: 16,
    },
    selectedText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    selectedInput: {
        backgroundColor: colors.primary,
    },
    input: {
        borderColor: colors.primary,
        borderWidth: 1.5,
        borderRadius: 16,
        width: '48%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        paddingVertical: 20,
        paddingHorizontal: 50
    }
})
