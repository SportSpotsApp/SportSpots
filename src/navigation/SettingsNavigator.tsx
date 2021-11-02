import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import SettingsScreen from "../screens/Settings/SettingsScreen";

const Stack = createStackNavigator();

const SettingsNavigator = (pros:any) => {
    return (
      <Stack.Navigator>
          <Stack.Screen
              name={'Settings'}
              component={SettingsScreen}
              options={{
                  headerShown: false,
              }}
              />
      </Stack.Navigator>
    );
};

export default SettingsNavigator;
