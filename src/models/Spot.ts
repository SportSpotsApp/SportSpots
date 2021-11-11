import Coordinate from './Coordinate';

export default interface Spot {
    id: string;
    sport: string;
    spotDesc: string;
    spotLongDesc: string;
    spotPostalCode: number;
    spotCityName: string;
    author: string;
    createAt: string;
    image: string;
    coordinates: Coordinate,
}

class SpotClass{
    public id : string="";
    public sport: string="foot";
    public spotDesc: string="le foot ave les pied";
    public spotLongDesc: string="aller le foot";
    public spotPostalCode: number=0;
    public spotCityName: string="Le puy";
    public author: string="AdministrateurCaca";
    public createAt: string="aujourd'jui";
    public image: string="https://www.memecreator.org/static/images/memes/5020938.jpg";
    //coordinates type to change with Coordinate instead of string(for debugging purpose)
    public coordinates: string ="";

    /*constructor(id_param:string,sport_param:string,spotDesc_param:string,spotLongDesc_param:string,
                sportPostalCode_param:number,spotCityName_param:string,author_param: string, createAt_param:string,
                image_param:string,coordinates_param:Coordinate){
        this.id=id_param;
        this.sport=sport_param;
        this.spotDesc=spotDesc_param;
        this.spotLongDesc=spotLongDesc_param;
        this.spotPostalCode=sportPostalCode_param;
        this.spotCityName=spotCityName_param;
        this.author=author_param;
        this.createAt=createAt_param;
        this.image=image_param;
        this.coordinates=coordinates_param;
    }*/

    constructor(){}
    
}
