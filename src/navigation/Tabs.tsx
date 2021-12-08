import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import SettingsNavigator from "./SettingsNavigator";
import ChatScreen from "../screens/ChatScreen";
import MapScreen from '../screens/Map/MapScreen';
import PostScreen from '../screens/Map/PostScreen';
import ActivitySearchResultTabNavigator from "./ActivitySearchResultTabNavigator";
import PeopleNumber from "../screens/Guests/PeopleNumber";
import HomeNavigator from "./HomeNavigator";
import ActivityNavigator from "./ActivityNavigator";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: any) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}

    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#0f7eaa'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return (

        <Tab.Navigator initialRouteName="HomeNavigator" screenOptions={{ tabBarActiveTintColor: '#e91e63' }}>

            <Tab.Screen name="HomeNavigator" component={HomeNavigator} options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../../assets/images/map-marked-alt-solid.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#0f7eaa' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#0f7eaa' : '#748c94', fontSize: 12, marginBottom: 10, }}>
                            Map
                        </Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="ActivityNavigator" component={ActivityNavigator} options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../../assets/images/search-location-solid.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#0f7eaa' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#0f7eaa' : '#748c94', fontSize: 12, marginBottom: 10, }}>
                            Find
                        </Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="Post" component={PostScreen} options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../../assets/images/plus-solid.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#fff',
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }} />

            <Tab.Screen name="Chat" component={PeopleNumber} options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../../assets/images/comments-solid.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#0f7eaa' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#0f7eaa' : '#748c94', fontSize: 12, marginBottom: 10, }}>
                            Chat
                        </Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="SettingsNavigator" component={SettingsNavigator} options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../../assets/images/cog-solid.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#0f7eaa' : '#748c94',
                            }}
                        />
                        <Text
                            style={{ color: focused ? '#0f7eaa' : '#748c94', fontSize: 12, marginBottom: 10, }}>
                            Settings
                        </Text>
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 40,
        },
        shadowOpacity: 1,
        shadowRadius: 3.5,
        elevation: 5
    }

});

export default Tabs;
