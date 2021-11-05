import Coordinate from './Coordinate';

export default interface Spot {
    id: string;
    sport: string;
    spotDesc: string;
    spotLongDesc: string;
    spotPostalCode: number;
    spotCityName: string;
    createBy: string;
    createDate: string;
    image: string;
    coordinates: Coordinate,
}
