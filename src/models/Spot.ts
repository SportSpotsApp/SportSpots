import Coordinate from './Coordinate';

export default class SpotClass {
    public id: string;
    public sport: string = "";
    public spotDesc: string = "";
    public spotLongDesc: string = "";
    public spotPostalCode: number;
    public spotCityName: string = "";
    public author: string = "";
    public createdAt: string = "";
    public image: string = "";
    public latitude: number = 0;
    public longitude: number = 0;

    constructor(
        id_param: string,
        sport_param: string,
        spotDesc_param: string,
        spotLongDesc_param: string,
        sportPostalCode_param: number,
        spotCityName_param: string,
        author_param: string,
        image_param: string,
        latitude_param: number,
        longitude_param: number
    ) {
        this.id = id_param;
        this.sport = sport_param;
        this.spotDesc = spotDesc_param;
        this.spotLongDesc = spotLongDesc_param;
        this.spotPostalCode = sportPostalCode_param;
        this.spotCityName = spotCityName_param;
        this.author = author_param;
        this.image = image_param;
        this.latitude = latitude_param;
        this.longitude = longitude_param;
    }
}
