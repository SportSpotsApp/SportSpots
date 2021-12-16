import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import SpotClass from "../models/Spot"
import Coordinate from '../models/Coordinate';

export default class FirebaseRequest
{
    //DATA OUTPUT
    public Output:any= [];
    public nbSpot:string = '0';

    //SETTERS
    public addSpot(Spot:SpotClass): Promise<any> {
        return firestore()
            .collection('Spots')
            .add({
                spotId: Spot.id,
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
            });
    }


    public async modifySpot(Id:String, modifiedSport:String, modifiedImage:String, modifiedDesc:String, modifiedLongDesc:String){

        let snapshot = await firestore()
        .collection("Spots")
        .where('spotId','==', Id)
        .get()

        snapshot.forEach((doc) => {
            console.log(Id, modifiedSport, modifiedImage, modifiedDesc, modifiedLongDesc);
            firestore().collection("Spots").doc(doc.id).update({
                sport: modifiedSport,
                image: modifiedImage,
                spotDesc: modifiedDesc,
                spotLongDesc: modifiedLongDesc
            });
        });
    }

    public getSpots(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            firestore()
                .collection("Spots")
                .get().then((data: any) => {
                    let spots: SpotClass[] = [];
                    data.forEach((el: any) => spots.push(
                        new SpotClass(el.data().spotId,
                            el.data().sport,
                            el.data().spotDesc,
                            el.data().spotLongDesc,
                            el.data().spotPostalCode,
                            el.data().spotCityName,
                            el.data().author,
                            el.data().image,
                            el.data().latitude,
                            el.data().longitude
                        )
                    ));
                    resolve(spots);
            });
        });
    }

    public async getSpot(){

        let snapshot = await firestore()
        .collection("Spots")
        .get()

        snapshot.forEach((doc) => {
            let Spot = new SpotClass(doc.data().spotId,
                doc.data().sport,
                doc.data().spotDesc,
                doc.data().spotLongDesc,
                doc.data().spotPostalCode,
                doc.data().spotCityName,
                doc.data().author,
                doc.data().image,
                doc.data().latitude,
                doc.data().longitude
            )
            this.Output.push(Spot);
        });
    }

    public async getSpotbySport(Sport:string){

        let snapshot = await firestore()
        .collection("Spots")
        .where('sport','==', Sport)
        .get()

        snapshot.forEach((doc) => {
            let Spot = new SpotClass(doc.data().spotId,
                doc.data().sport,
                doc.data().spotDesc,
                doc.data().spotLongDesc,
                doc.data().spotPostalCode,
                doc.data().spotCityName,
                doc.data().author,
                doc.data().image,
                doc.data().latitude,
                doc.data().longitude
            )
            this.Output.push(Spot);
        });
    }

    public async getSpotbyPostalCode(Code:number){

        let snapshot = await firestore()
        .collection("Spots")
        .where('spotPostalCode','==', Code)
        .get()

        snapshot.forEach((doc) => {
            let Spot = new SpotClass(doc.data().spotId,
                doc.data().sport,
                doc.data().spotDesc,
                doc.data().spotLongDesc,
                doc.data().spotPostalCode,
                doc.data().spotCityName,
                doc.data().author,
                doc.data().image,
                doc.data().latitude,
                doc.data().longitude
            )
            this.Output.push(Spot);
        });
    }

    public getSpotbyUser(User: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            firestore()
                .collection("Spots")
                .where('author','==', User)
                .get().then((data: any) => {
                    let spots: SpotClass[] = [];
                    data.forEach((el: any) => spots.push(
                        new SpotClass(el.data().spotId,
                            el.data().sport,
                            el.data().spotDesc,
                            el.data().spotLongDesc,
                            el.data().spotPostalCode,
                            el.data().spotCityName,
                            el.data().author,
                            el.data().image,
                            el.data().latitude,
                            el.data().longitude
                        )
                    ));
                    resolve(spots);
            });
        });
    }

    public async getSpotbyCity(City:string) {

        let snapshot = await firestore()
        .collection("Spots")
        .where('spotCityName','==', City)
        .get()

        snapshot.forEach((doc) => {
            let Spot = new SpotClass(doc.data().spotId,
                doc.data().sport,
                doc.data().spotDesc,
                doc.data().spotLongDesc,
                doc.data().spotPostalCode,
                doc.data().spotCityName,
                doc.data().author,
                doc.data().image,
                doc.data().latitude,
                doc.data().longitude
            )
            this.Output.push(Spot);
        });
    }
}
