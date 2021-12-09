import React, { createRef, useEffect, useRef, useState } from 'react';
import { FlatList, useWindowDimensions, View, Animated } from 'react-native';
import MapView, { Coordinate, PROVIDER_GOOGLE } from 'react-native-maps';
import GooglePlaceInput from "./GooglePlaceInput";
import GetLocation, { Location } from 'react-native-get-location'
import CustomCoordinates from '../../models/Coordinate';
import CustomMarker from "../../components/Map/CustomMarker";
import SpotCarrousel from "../../components/Spot/SpotCarrousel";
import Spot from '../../models/Spot';
import FirebaseRequest from '../../API/spotAPI';
import { StyleType, CustomButton } from "../../components/CustomButton/CustomButton";

const api = new FirebaseRequest()
let spots: Spot[] = [];
api.getSpot();
//setTimeout(function(){spots = api.Output;},1000)

const MapScreen = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState('');

    const flatlist: React.RefObject<FlatList> = useRef(null);
    const map: React.RefObject<MapView> = createRef();

    const viewConfig = useRef({ itemVisiblePercentThreshold: 30 })
    const onViewChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    const width = useWindowDimensions().width;

    useEffect(() => {

        if (!selectedPlaceId || !flatlist) return;

        const index = spots.findIndex(spot => spot.id === selectedPlaceId);

        flatlist.current?.scrollToIndex({ animated: true, index: index });

        const selectedSpot = spots[index];
        const region = {
            latitude: selectedSpot.latitude,
            longitude: selectedSpot.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }

        map.current?.animateToRegion(region, 1000);
    }, [selectedPlaceId])

    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 20000,
    })
        .then(location => {
            const region = ({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            })

            map.current?.animateToRegion(region);
        })
        .catch(error => {
            console.log(error.message);
        })

    //particular return(every minutes)
    setInterval(function(){
        api.Output=[]
        spots:[];
        api.getSpot()
        .then(async function() {
            spots = api.Output;
            return (
                <View style={{ flex: 1 }}>
                    <MapView style={{ flex: 1 }}
                        ref={map}
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation>
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
                            data={spots}
                            renderItem={({ item }: { item: Spot }) => <SpotCarrousel spot={item} />}
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
        })

    },10000);

    //Default return
    return (
        <View style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }}
                ref={map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation>
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
                    data={spots}
                    renderItem={({ item }: { item: Spot }) => <SpotCarrousel spot={item} />}
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
