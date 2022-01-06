import React from "react";
import colors from '../../../theme/colors';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    GestureResponderEvent,
    ColorValue,
    useColorScheme,
    TouchableOpacity
} from 'react-native';

interface ClassTypeProps {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
    type?: StyleType;
    bgColor?: ColorValue;
    fgColor?: ColorValue,
    style?: object
}

export enum StyleType {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    TERTIARY = "TERTIARY",
    LIGHT = "LIGHT"
}

export const CustomButton = ({ onPress, text, type = StyleType.PRIMARY, bgColor, fgColor, style }: ClassTypeProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor && { backgroundColor: bgColor },
                style
            ]}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {}
                ]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles: { [key: string]: any; } = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        marginVertical: 5,
        borderRadius: 16,
        borderColor: "red",
        borderWith: 1.5
    },
    container_PRIMARY: {
        backgroundColor: colors.primary,
    },
    container_SECONDARY: {
        borderColor: '#0f7eaa',
        borderWidth: 2,
    },
    container_TERTIARY: {

    },
    container_LIGHT: {
        backgroundColor: colors.white,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },

    text_SECONDARY: {
        color: '#0f7eaa',
    },

    text_TERTIARY: {
        color: 'grey',
    },
})
