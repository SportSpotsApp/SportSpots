import React, {createRef, useCallback, useEffect, useRef, useState} from 'react';
import { FlatList, useWindowDimensions, View, Animated } from 'react-native';
import MapView, {Coordinate, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import GetLocation, {Location} from 'react-native-get-location'
import CustomMarker from "../../components/Map/CustomMarker";
import SpotCarrousel from "../../components/Spot/SpotCarrousel";
import Spot from '../../models/Spot';
import FirebaseRequest from '../../API/spotAPI';
import {useIsFocused} from "@react-navigation/core";
const api = new FirebaseRequest()

const MapScreen = () => {
    const [spots, setSpots] = useState<Spot[]>([]);
    const [spotsDisplayed, setSpotsDisplayed] = useState<Spot[]>([]);
    const [selectedPlaceId, setSelectedPlaceId] = useState('');
    const [initialUserRegion, setInitialUserRegion] = useState<Region>();
    const flatList: React.RefObject<FlatList> = useRef(null);
    const map: React.RefObject<MapView> = createRef();
    const width = useWindowDimensions().width;
    const isFocused = useIsFocused();

    const viewConfig = useRef({ itemVisiblePercentThreshold: 30 })

    console.log("MapScreen");
    useEffect(() => {
        if (!selectedPlaceId || !flatList) return;
        const index = spotsDisplayed.findIndex(spot => spot.id === selectedPlaceId);
        flatList.current?.scrollToIndex({ animated: true, index: index });
        const selectedSpot = spotsDisplayed[index];
        map.current?.animateToRegion({
            latitude: selectedSpot.latitude,
            longitude: selectedSpot.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        })
    }, [selectedPlaceId])

    useEffect(() => {
        console.log("Use rekjfijkd");
        onRegionChange()
    }, [spots]);

    useEffect(() => {
        if(!isFocused) return;

        console.log("useEffect isFocused MapScreen");

        if(!initialUserRegion) {
            GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 20000,
            }).then((location: Location) => {
                console.log("userRegionSet");
                setInitialUserRegion({
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                })
                onRegionChange()
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
        }

        api.getSpots()
            .then((spots: Spot[]) => setSpots(spots))
            .catch(error => {
                console.log(error.message);
            })
    }, [isFocused]);

    const onViewChanged = useRef(({ viewableItems, changed }: any) => {
        console.log(changed);
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    const onRegionChange = () => {
        map.current?.getMapBoundaries().then(mapB => {
            const spotsDisplayed = spots.filter(spot => {
                const maxDistance = calcCrow(mapB.southWest.latitude, mapB.southWest.longitude, mapB.northEast.latitude, mapB.northEast.longitude);
                const distanceNorthEst = calcCrow(spot.latitude, spot.longitude, mapB.southWest.latitude, mapB.southWest.longitude);
                const distanceSouthWest = calcCrow(spot.latitude, spot.longitude, mapB.northEast.latitude, mapB.northEast.longitude);
                console.log(spot.sport + " - " + distanceNorthEst + " - " + distanceSouthWest + " - maxD: " + (maxDistance));
                return (distanceNorthEst + distanceSouthWest) <= (maxDistance*1.35);
            })

            console.log("Displayed => " + spotsDisplayed.length);
            setSpotsDisplayed(spotsDisplayed);
        })
    };

    const calcCrow = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371;
        const dLat = toRad(lat2-lat1);
        const dLon = toRad(lon2-lon1);
        lat1 = toRad(lat1);
        lat2 = toRad(lat2);

        let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        let d = R * c;
        return d;
    }
    const toRad = (value: number) => value * Math.PI / 180;

    return (
        <View style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }}
                     initialRegion={initialUserRegion}
                     onRegionChangeComplete={onRegionChange}
                     ref={map}
                     provider={PROVIDER_GOOGLE}
                     showsUserLocation
            >
                {spots.map(spot => (
                    <CustomMarker
                        position={{
                            latitude: spot.latitude,
                            longitude: spot.longitude
                        }}
                        sport={spot.sport}
                        isSelected={spot.id === selectedPlaceId}
                        onPress={() => {
                            setSelectedPlaceId(spot.id);
                        }}
                        key={spot.id}
                    />
                ))}
            </MapView>
            <View style={{
                position: "absolute",
                bottom: 40,
            }}>
                <FlatList
                    ref={flatList}
                    data={spotsDisplayed}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }: { item: Spot }) => <SpotCarrousel spot={item} key={item.id} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    viewabilityConfig={viewConfig.current}
                />
            </View>
        </View >
    );
}

export default MapScreen;
