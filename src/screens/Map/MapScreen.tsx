import React, {useEffect, useRef, useState} from 'react';
import {FlatList, useWindowDimensions, View} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import GooglePlaceInput from "./GooglePlaceInput";

import spots from '../../../assets/data/spots'
import CustomMarker from "../../components/Map/CustomMarker";
import SpotCarrousel from "../../components/Spot/SpotCarrousel";
import Spot from '../../models/Spot';

const MapScreen = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState('');

    const flatlist: React.RefObject<FlatList> = useRef(null);
    const map: React.RefObject<MapView> = useRef(null)

    const viewConfig = useRef({itemVisiblePercentThreshold: 30})
    const onViewChanged = useRef(({ viewableItems }: any) => {
        if(viewableItems.length > 0)
        {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    const width = useWindowDimensions().width;

    useEffect(() => {
        if(!selectedPlaceId || !flatlist) return;

        const index = spots.findIndex(spot => spot.id === selectedPlaceId);

        flatlist.current?.scrollToIndex({ animated: true, index: index });

        const selectedSpot = spots[index];
        const region = {
            latitude: selectedSpot.coordinates.latitude,
            longitude: selectedSpot.coordinates.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }

        map.current?.animateToRegion(region);
    }, [selectedPlaceId])

    return (
            <View style={{ flex: 1 }}>
                <GooglePlaceInput />
                <MapView style={{flex: 1}}
                         ref={() => map}
                         provider={PROVIDER_GOOGLE}
                         showsUserLocation
                         initialRegion={{
                             latitude: 45.042768,
                             longitude: 3.882936,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421
                         }}>
                    {spots.map(spots => (
                        <CustomMarker
                        coordinate={spots.coordinates}
                        sport={spots.sport}
                        isSelected={spots.id === selectedPlaceId}
                        onPress={() => {
                            setSelectedPlaceId(spots.id);
                        }}
                        key={spots.id}
                        />
                    ))}
                </MapView>

                <View style={{
                    bottom: 40,
                }}>
                    <FlatList
                        ref={flatlist}
                        data={spots}
                        renderItem={({ item }: {item: Spot}) => <SpotCarrousel spot={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={width - 60}
                        snapToAlignment={"center"}
                        decelerationRate={"fast"}
                        viewabilityConfig={viewConfig.current}
                        onViewableItemsChanged={onViewChanged.current}
                    />
                </View>

            </View>
    );
}

export default MapScreen;
