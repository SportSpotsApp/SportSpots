import React from "react";
import {View, Text, StyleSheet, Pressable, GestureResponderEvent, ColorValue} from 'react-native';

interface ClassTypeProps {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
    type?: StyleType;
    bgColor?: ColorValue;
    fgColor?: ColorValue
}

export enum StyleType {
    PRIMARY="PRIMARY",
    SECONDARY="SECONDARY",
    TERTIARY="TERTIARY"
}

export const CustomButton = ({onPress, text, type = StyleType.PRIMARY, bgColor, fgColor}: ClassTypeProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor && {backgroundColor: bgColor}
            ]}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {}
                ]}>
                {text}
            </Text>
        </Pressable>
    )
}

const styles: {[key: string]: any;} = StyleSheet.create({
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
