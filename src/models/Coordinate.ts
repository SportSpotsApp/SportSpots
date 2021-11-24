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

    // Distance between two coordinates on the Earth
    public haversineDistance(other: Coordinate): number {
        const lat1 = this.latitude;
        const lon1 = this.longitude;
        const lat2 = other.latitude;
        const lon2 = other.longitude;

        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1); // deg2rad below
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    }

    // Distance filter
    /// @param spots: array of spots
    /// @param radius: distance in km
    public distanceFilter(spots: SpotClass[], radius: number): SpotClass[] {
        var filteredSpots: SpotClass[] = [];
        for (let i = 0; i < spots.length; i++) {
            const spotCoordinates: Coordinate = new Coordinate(spots[i].latitude, spots[i].longitude);
            if (this.haversineDistance(spotCoordinates) <= radius) {
                filteredSpots.push(spots[i]);
            }
        }

        // Sort by distance
        filteredSpots.sort((a, b) => {
            return this.haversineDistance(new Coordinate(a.latitude, a.longitude)) - this.haversineDistance(new Coordinate(b.latitude, b.longitude));
        });

        return filteredSpots;
    }
}



