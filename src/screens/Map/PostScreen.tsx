import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomInput from "../../components/CustomInput/CustomInput";
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { Custompicker } from '../../components/CustomPicker/CustomPicker';
import SpotClass from '../../models/Spot';
import GetLocation, { Location } from 'react-native-get-location'
import FirebaseRequest from '../../API/spotAPI';
import auth from "@react-native-firebase/auth";
import uuid from 'react-native-uuid'
const db = new FirebaseRequest();

const PostScreen = ({ navigation }: any) => {
    const [spotSport, setSpotSport] = useState("football");
    const [location, setLocation] = useState<Location>();
    const [error, setError] = useState<string>();
    const [spotDesc, setSpotDesc] = useState('');
    const [spotLongDesc, setSpotLongDesc] = useState('');
    const [spotPostalCode, setSpotPostalCode] = useState('');
    const [spotCityName, setSpotCityName] = useState('');
    const [spotImage, setSpotImage] = useState("");
    const {colors} = useTheme();

    const handleSubmit = () => {
        if (!location) {
            setError("Votre localisation n'a pas pu être récupérée");
            return;
        }

        db.addSpot(new SpotClass(
            uuid.v4() as string,
            spotSport,
            spotDesc,
            spotLongDesc,
            parseInt(spotPostalCode),
            spotCityName,
            String(auth().currentUser?.email),
            spotImage,
            location.latitude,
            location.longitude
        )).then(() => {
            navigation.navigate('Map');
        }).catch(error => {
            setError(error.message);
        })
    }

    const sportList = [
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

    useEffect(() => {
        console.log("useEffect PotScreen");
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 20000,
        }).then(location => {
            setLocation(location)
            console.log("oke ??", location);
        })
            .catch(error => {
                const {code, message} = error;
                console.warn(code, message);
            })
    }, []);

    return (<View style={styles.root}>
        <Text style={{color: colors.text}}>Poster un spot</Text>

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
        <CustomInput
            placeholder="lien de l'image"
            value={spotImage}
            setValue={setSpotImage}
        />
        <CustomButton
            text="Poster"
            onPress={handleSubmit}
        />

        <Text>{error}</Text>
    </View>);
}

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
