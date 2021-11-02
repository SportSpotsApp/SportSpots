import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home/HomeScreen";
import SignInScreen from "../screens/Auth/SignInScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import ConfirmEmailScreen from "../screens/Auth/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/Auth/NewPasswordScreen";
import DestinationSearch from "../screens/Search/ActivitySearchScreen";

import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
     <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
                <Stack.Screen name="Menu" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
