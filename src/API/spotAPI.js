import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import SpotClass from "../models/Spot" 

export function addSpot(Spot)
{
    firestore()
    .collection('Spots')
    .add({
        sport: Spot.sport,
        spotDesc: Spot.spotDesc,
        spotLongDesc: Spot.spotLongDesc,
        spotPostalCode: Spot.spotPostalCode,
        spotCityName: Spot.spotCityName,
        author: Spot.createAt,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
        image: Spot.image,
        coordinates: Spot.coordinates,
    })
    .catch((error) => console.log(error));
}

export async function getSpot(SpotRetreived)
{
    var SpotList = [];

    var snapshot = await firestore()
    .collection('Spots')
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) => {
        SpotList.push(doc.data());
    });

    foodRetreived(SpotList);
}
