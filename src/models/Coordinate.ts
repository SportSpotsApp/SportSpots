import GetLocation, { Location } from 'react-native-get-location'
import SpotClass from './Spot';

// Degree to radian converter
function deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
}

export default class Coordinate {
    public latitude: number;
    public longitude: number;

    constructor(lat: number, long: number) {
        this.latitude = lat;
        this.longitude = long;
    }
}



