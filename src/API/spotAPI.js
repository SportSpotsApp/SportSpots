import firebase from '@react-native-firebase/app';


module.export = class API{

    addSpot(Spot) {
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

    async getSpot(SpotRetreived) {
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
}

export default API;