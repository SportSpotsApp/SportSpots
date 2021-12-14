import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import EmailSettingsSreen from "../screens/Settings/EmailSettingsSreen";
import PasswordSettingsSreen from "../screens/Settings/PasswordSettingsSreen";
import SportListSettingsScreen from "../screens/Settings/SportListSettingsScreen";

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
                component={EmailSettingsSreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={'ModifyPassword'}
                component={PasswordSettingsSreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={'ModifySportList'}
                component={SportListSettingsScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default SettingsNavigator;
