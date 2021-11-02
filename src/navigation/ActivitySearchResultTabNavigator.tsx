import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import ActivitySearchScreen from "../screens/Search/ActivitySearchScreen";

const Tab = createMaterialTopTabNavigator();

const ActivitySearchResultTabNavigator = (props:any) => {
    return (
      <Tab.Navigator screenOptions={
          {
             tabBarActiveTintColor: '#0f7eaa',
              tabBarIndicatorStyle: {
                 backgroundColor: '#e7e7e7',
              }
          }
      }
      >
          <Tab.Screen name={'liste'} component={ActivitySearchScreen} />
          <Tab.Screen name={'calendrier'} component={ActivitySearchScreen} />
      </Tab.Navigator>
    );
};

export default ActivitySearchResultTabNavigator;
