import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import SpotClass from "../models/Spot" 

export default class FirebaseRequest
{
    public Output : any = [];
    public addSpot(Spot:SpotClass)
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

    public async getSpot()
    {

        var snapshot = await firestore()
        .collection("Spots")
        .orderBy("createAt")
        .get()

        snapshot.forEach((doc) => {

            this.Output.push(doc.data());
        });

        
    }
}
