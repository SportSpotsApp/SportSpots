import React from "react";
import {Text, View} from "react-native";

import spots from '../../../assets/data/spots'
import DetailedSpot from "../../components/Spot/DetailedSpot";
import {useRoute} from "@react-navigation/native";
import {RouteProp} from "@react-navigation/core/lib/typescript/src/types";
import {ParamListBase} from "@react-navigation/routers";

const SpotDetailsScreen = () => {
    const route: RouteProp<any> = useRoute();
    const spot = spots.find(spot => spot.id === route.params?.spotId)
    return (
      <View style={{backgroundColor: 'white'}}>
          <DetailedSpot spot={spot} />
      </View>
    );
};

export default SpotDetailsScreen;
