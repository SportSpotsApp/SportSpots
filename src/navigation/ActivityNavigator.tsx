import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ActivitySearchResultTabNavigator from "./ActivitySearchResultTabNavigator";
import DetailedActivity from "../components/Activity/DetailedActivity";

const Stack = createStackNavigator();

const ActivityNavigator = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen
              name={'ActivitySearchResultTabNavigator'}
              component={ActivitySearchResultTabNavigator}
              options={{
                  headerShown: false,
              }}
              />
          <Stack.Screen
              name={'DetailedActivity'}
              component={DetailedActivity}
              options={{
                  headerShown: false,
              }}
          />
      </Stack.Navigator>
    );
};

export default ActivityNavigator;
