import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MapScreen from "../screens/Map/MapScreen";
import DetailedSpot from "../components/Spot/DetailedSpot";
import SpotPeople from "../screens/Guests/SpotPeople";
import DetailedSpotEditable from "../components/Spot/DetailedSpotEditable";

const Stack = createStackNavigator();

const MySpotsNavigator = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen
              name={'MySpots'}
              component={SpotPeople}
              options={{
                  headerShown: false,
              }}
              />
          <Stack.Screen
              name={'DetailedSpotEditable'}
              component={DetailedSpotEditable}
              options={{
                  headerShown: false,
              }}
          />
      </Stack.Navigator>
    );
};

export default MySpotsNavigator;
