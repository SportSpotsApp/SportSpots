import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from "../../../theme/colors";

interface ClassTypeProps {
    value: string;
    setValue: any;
    placeholder: any;
    secureTextEntry?: boolean;
    multiline?: boolean;
    label?: string
}

const CustomInput = ({ value, setValue, placeholder, label, secureTextEntry = false, multiline = false}: ClassTypeProps) => {
    const [focus, setFocus] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            {label && <Text style={styles.text}>{label}</Text>}
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={[styles.input, focus ? styles.inputFocus : {}]}
                secureTextEntry={secureTextEntry}
                multiline={multiline}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    text: {
        fontSize: 15,
        marginBottom: 14,
    },
    input: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth: 1.5,
        borderRadius: 16,

        display: 'flex',
        justifyContent: 'center',
        height: 64,
        marginBottom: 32,
        paddingHorizontal: 19
    },
    inputFocus: {
        borderColor: colors.primary
    }
});

export default CustomInput;
