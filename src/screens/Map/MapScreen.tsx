import React, {createRef, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import { FlatList, useWindowDimensions, View, Animated } from 'react-native';
import MapView, {Coordinate, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import GooglePlaceInput from "./GooglePlaceInput";
import GetLocation, { Location } from 'react-native-get-location'
import CustomCoordinates from '../../models/Coordinate';
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
    const [initialState, setInitialState] = useState<Region>();
    const [region, setRegion] = useState<Region>();
    const flatlist: React.RefObject<FlatList> = useRef(null);
    const map: React.RefObject<MapView> = createRef();
    const width = useWindowDimensions().width;

    const isFocused = useIsFocused();

    useEffect(() => {
        api.getSpots().then((spots: Spot[]) => {
            setSpots(spots)
        }).catch(error => {
            console.log(error.message);
        })
        const bounds = map.current?.getMapBoundaries();
        console.log(bounds);
    }, [isFocused]);

    const viewConfig = useRef({ itemVisiblePercentThreshold: 30 })

    const onRegionChange = (region: Region) => {
        map.current?.getMapBoundaries().then(mapB => {
            const spotsDisplayed = spots.filter(spot => {
                console.log(spot.sport + " - ");
                const maxDistance = calcCrow(mapB.southWest.latitude, mapB.southWest.longitude, mapB.northEast.latitude, mapB.northEast.longitude);
                const distanceNorthEst = calcCrow(spot.latitude, spot.longitude, mapB.northEast.latitude, mapB.northEast.longitude);
                const distanceSouthWest = calcCrow(spot.latitude, spot.longitude, mapB.northEast.latitude, mapB.northEast.longitude);
                console.log("maxDistance " + maxDistance + " - " + distanceSouthWest + " - " + distanceNorthEst);
                return (distanceNorthEst + distanceSouthWest) <= (maxDistance*1.5);
            })

            console.log(spotsDisplayed);
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

    const onViewChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    useEffect(() => {
        if (!selectedPlaceId || !flatlist) return;
        const index = spots.findIndex(spot => spot.id === selectedPlaceId);
        flatlist.current?.scrollToIndex({ animated: true, index: index });
        const selectedSpot = spots[index];
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 20000,
        })
        .then(location => {
            const region = ({
                latitude: selectedSpot.latitude,
                longitude: selectedSpot.longitude,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
            })

            map.current?.animateToRegion(region);
        })
        .catch(error => {
            console.log(error.message);
        })
    }, [selectedPlaceId])

    return (
        <View style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }}
                     initialRegion={initialState}
                     onRegionChangeComplete={region => {
                         setRegion(region)
                         onRegionChange(region)
                     }}
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
                bottom: 40,
            }}>
                <FlatList
                    ref={flatlist}
                    data={spotsDisplayed}
                    renderItem={({ item }: { item: Spot }) => <SpotCarrousel spot={item} key={item.id} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View >
    );
}

export default MapScreen;
