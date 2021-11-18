import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import SpotClass from "../models/Spot" 

export function addSpot(Spot:SpotClass)
{
    firestore()
    .collection('Spots')
    .add({
        spotDesc: Spot.spotDesc,
        sport: Spot.sport,
        spotLongDesc: Spot.spotLongDesc,
        spotPostalCode: Spot.spotPostalCode,
        spotCityName: Spot.spotCityName,
        author: Spot.author,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
        image: Spot.image,
        latitude: Spot.latitude,
        longitude: Spot.longitude
    })
    .catch((error) => console.log(error));
}

/*export async function getSpot(SpotRetreived)
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
}*/
