import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import SpotClass from "../models/Spot"
import ClassCoordinate from '../models/Coordinate';
import Coordinate from '../models/Coordinate';

export default class FirebaseRequest
{
    //DATA OUTPUT
    public Output:any= [];
    public nbSpot:string = '0';


    //SETTERS
    public addSpot(Spot:SpotClass)
    {
        firestore()
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
        })
        .catch((error) => console.log(error));
    }

    public async modifyDesc(Id:Number, modifiedDesc:String){

        var snapshot = await firestore()
        .collection("Spots")
        .where('spotId','==', Id)
        .get()

        snapshot.forEach((doc) => {
            firestore().collection("Spots").doc(doc.id).update({spotDesc: modifiedDesc});
        });
    }

    public async modifyLongDesc(Id:Number, modifiedLongDesc:String){

        var snapshot = await firestore()
        .collection("Spots")
        .where('spotId','==', Id)
        .get()

        snapshot.forEach((doc) => {
            firestore().collection("Spots").doc(doc.id).update({spotLongDesc: modifiedLongDesc});
        });
    }

    public async modifyCityName(Id:Number, modifiedCityName:String){

        var snapshot = await firestore()
        .collection("Spots")
        .where('spotId','==', Id)
        .get()

        snapshot.forEach((doc) => {
           firestore().collection("Spots").doc(doc.id).update({spotCityName: modifiedCityName});
        });
    }

    public async modifyPostalCode(Id:Number, modifiedPostalCode:Number){

        var snapshot = await firestore()
        .collection("Spots")
        .where('spotId','==', Id)
        .get()

        snapshot.forEach((doc) => {
            firestore().collection("Spots").doc(doc.id).update({spotPostalCode: modifiedPostalCode});
        });
    }

    public async modifySport(Id:Number, modifiedSport:String){

        var snapshot = await firestore()
        .collection("Spots")
        .where('spotId','==', Id)
        .get()

        snapshot.forEach((doc) => {
            firestore().collection("Spots").doc(doc.id).update({sport: modifiedSport});
        });
    }



    //GETTERS
    public async getSpotInRadius(position:Coordinate)
    {
        var snapshot = await firestore()
        .collection("Spots")
        .orderBy("createAt")
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

            this.Output = position.distanceFilter(this.Output,50,20);

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

        var snapshot = await firestore()
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

        var snapshot = await firestore()
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

        var snapshot = await firestore()
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

     /**   snapshot.forEach((doc) => {
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
        });

        return output;**/
    }

    public async getSpotbyCity(City:string) {

        var snapshot = await firestore()
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

    public async getId(){
        await firestore()
        .collection("Spots")
        .get()
        .then((size) => {this.nbSpot = size.size.toString()});
    }
}
