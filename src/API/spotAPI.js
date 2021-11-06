import firebase from '@react-native-firebase/app';

export default function addSpot(Spot) {
    firebase.firestore()
        .collection('Spots')
        .add({
            sport: Spot.sport,
            spotDesc: Spot.spotDesc,
            spotLongDesc: Spot.spotLongDesc,
            spotPostalCode: Spot.spotPostalCode,
            spotCityName: Spot.spotCityName,
            createBy: Spot.createdBy,
            createDate: firebase.firestore.FieldValue.serverTimestamp(),
            image: Spot.image,
            coordinates: Spot.coordinates,
        })
        .catch((error) => console.log(error));
}

export async function getSpot(SpotRetreived) {
    var SpotList = [];

    var snapshot = await firebase.firestore()
        .collection('Spots')
        .orderBy('createdDate')
        .get()

    snapshot.forEach((doc) => {
        SpotList.push(doc.data());
    });

    foodRetreived(SpotList);
}