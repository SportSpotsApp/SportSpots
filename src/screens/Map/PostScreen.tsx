import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomInput from "../../components/CustomInput/CustomInput";
import GetLocation from 'react-native-get-location'


const PostScreen = ({ navigation }: any) => {

    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 20000,
    })
        .then(location => {
            console.log(location);
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })

    const { colors } = useTheme();

    const theme = useTheme();
    const [spotName, setSpotName] = useState('');

    return (
        <View style={styles.container}>
            <Text style={{ color: colors.text }}>Poster un spot</Text>
            <CustomInput
                placeholder="Nom du spot"
                value={spotName}
                setValue={setSpotName}
            />
        </View>
    );
};

export default PostScreen;

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
