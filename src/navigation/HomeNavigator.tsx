import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MapScreen from "../screens/Map/MapScreen";
import DetailedSpot from "../components/Spot/DetailedSpot";
import SpotDetailsScreen from "../screens/Details/SpotDetailsScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen
              name={'Map'}
              component={MapScreen}
              options={{
                  headerShown: false,
              }}
              />
          <Stack.Screen
              name={'DetailedSpot'}
              component={DetailedSpot}
              options={{
                  headerShown: false,
              }}
          />
      </Stack.Navigator>
    );
};

export default HomeNavigator;
