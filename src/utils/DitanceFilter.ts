import Coordinate from '../models/Coordinate';

// Degree to radian converter
function deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
}

// Distance between two coordinates on the Earth
export function haversineDistance(point1: Coordinate, point2: Coordinate): number {
    const lat1 = point1.latitude;
    const lon1 = point1.longitude;
    const lat2 = point2.latitude;
    const lon2 = point2.longitude;

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

// Returns true if the distance between the two coordinates is less than the given radius
export function uniqueDistanceFilter(center: Coordinate, radius: number, point: Coordinate): boolean {
    const distance = haversineDistance(center, point);
    return distance <= radius;
}

// Returns only the coordinates within the given radius
export default function multiDistanceFilter(center: Coordinate, radius: number, points: Coordinate[]): Coordinate[] {
    return points.filter(point => uniqueDistanceFilter(center, radius, point));
}