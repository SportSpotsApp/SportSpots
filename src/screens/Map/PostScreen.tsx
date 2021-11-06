import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomInput from "../../components/CustomInput/CustomInput";
import { CustomButton } from '../../components/CustomButton/CustomButton';
import GetLocation from 'react-native-get-location'
import modelSpot from '../../models/Spot';
import {addSpot} from '../../API/spotAPI';



const PostScreen = ({ navigation }: any) => {
    let addedSpot = {} as modelSpot;

    const [spotDesc, setSpotDesc] = useState('');
    const [spotLongDesc, setSpotLongDesc] = useState('');
    const [spotPostalCode, setSpotPostalCode] = useState('');
    const [spotCityName, setSpotCityName] = useState('');

    // Get location
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 20000,
    })
        .then(location => {
            addedSpot.coordinates.latitude = location.latitude;
            addedSpot.coordinates.longitude = location.longitude;
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })

    const handleSubmit = () => {
        addedSpot.spotDesc = spotDesc;
        addedSpot.spotLongDesc = spotLongDesc;
        addedSpot.spotPostalCode = 0;
        addedSpot.spotCityName = spotCityName;

        addSpot(addedSpot);

        navigation.navigate('Map');
    }

    const { colors } = useTheme();

    const theme = useTheme();

    return (
        <View style={styles.root}>
            <Text style={{ color: colors.text }}>Poster un spot</Text>
            <CustomInput
                placeholder="Description courte"
                value={spotDesc}
                setValue={setSpotDesc}
            />
            <CustomInput
                placeholder="Description longue"
                value={spotLongDesc}
                setValue={setSpotLongDesc}
            />
            <CustomInput
                placeholder="Code postal"
                value={spotPostalCode}
                setValue={setSpotPostalCode}
            />
            <CustomInput
                placeholder="Ville"
                value={spotCityName}
                setValue={setSpotCityName}
            />
            <CustomButton
                text="Poster"
                onPress={() => { handleSubmit() }}
            />
        </View>
    );
};

export default PostScreen;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
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
