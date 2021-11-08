import Coordinate from './Coordinate';

export default interface Activity {
    id: string;
    sport: string;
    activityDesc: string;
    activityLongDesc: string;
    activityPostalCode: number;
    activityCityName: string;
    activityDate: string;
    activityTime: string;
    minimalNumber: number;
    currentNumber: number;
    maximalNumber: number;
    author: string;
    createAt: string;
    spotId: string;
    image: string;
    coordinates: Coordinate,
}
