import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import ChangeEmail from "../screens/Settings/ChangeEmail";
import ChangePassword from "../screens/Settings/ChangePassword";

const Stack = createStackNavigator();

const SettingsNavigator = (pros: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Settings'}
                component={SettingsScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={'ModifyEmail'}
                component={ChangeEmail}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={'ModifyPassword'}
                component={ChangePassword}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default SettingsNavigator;
