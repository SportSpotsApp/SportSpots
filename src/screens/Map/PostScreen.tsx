import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomInput from "../../components/CustomInput/CustomInput";
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { Custompicker } from '../../components/CustomPicker/CustomPicker';
import Coordinate from '../../models/Coordinate';
import SpotClass from '../../models/Spot';
import FirebaseRequest from '../../API/spotAPI';
import auth from "@react-native-firebase/auth";
import { Sport } from '../../models/SportParser/Sport';


const PostScreen = ({ navigation }: any) => {

    let db = new FirebaseRequest();

    const [spotDesc, setSpotDesc] = useState('');
    const [spotLongDesc, setSpotLongDesc] = useState('');
    const [spotPostalCode, setSpotPostalCode] = useState('');
    const [spotCityName, setSpotCityName] = useState('');
    const [spotSport, setSpotSport] = useState("");
    const sportList =
        [["Empty", "empty"],
        ["Football", "football"],
        ["Basketball", "basketball"],
        ["Volleyball", "volleyball"],
        ["Tennis", "tennis"],
        ["Handball", "handball"],
        ["Badminton", "badminton"],
        ["Hockey", "hockey"],
        ["Baseball", "baseball"],
        ["Cycling", "cycling"],
        ["Running", "running"],
        ["Swimming", "swimming"],
        ["Other", "other"]];

    var PostalCode: number = +spotPostalCode;

    const handleSubmit = () => {

        var currentLocation: Coordinate = new Coordinate(0, 0);
        currentLocation.setToCurrentLocation();

        var latitude: number = currentLocation.latitude;
        var longitude: number = currentLocation.longitude;
        let addedSpot = new SpotClass(spotSport,
            spotDesc,
            spotLongDesc,
            PostalCode,
            spotCityName,
            String(auth().currentUser?.email),
            "image",
            latitude,
            longitude
        )
        db.addSpot(addedSpot);


        navigation.navigate('Map');

    }

    const ReturnValue = () => {
        db.getSpot();
        console.log(db.Output);
    }


    const { colors } = useTheme();

    const theme = useTheme();

    return (
        <View style={styles.root}>
            <Text style={{ color: colors.text }}>Poster un spot</Text>

            <Custompicker
                value={spotSport}
                setValue={setSpotSport}
                mode="dropdown"
                list={sportList}
            />

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
            <CustomButton
                text="Get"
                onPress={() => { ReturnValue() }}
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
