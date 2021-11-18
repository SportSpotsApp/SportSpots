/*
export default interface Coordinate {
    latitude: number;
    longitude: number;

};*/

export default class Coordinate
{
    public latitude: number;
    public longitude: number;

    constructor(lat:number,long:number)
    {
        this.latitude=lat;
        this.longitude=long;
    }
}



