import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import HomeScreen from '../screens/MapScreen';
import SearchScreen from '../screens/SearchScreen';
import ChatScreen from '../screens/ChatScreen';
import PostScreen from '../screens/PostScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}: any) => (
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
            backgroundColor: '#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return (

        <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarActiveTintColor: '#e91e63',}}>

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/carte.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        <Text
                            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12, marginBottom: 10,}}>
                            Map
                        </Text>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/loupe.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        <Text
                            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12, marginBottom: 10,}}>
                            Find
                        </Text>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Post" component={PostScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                    <Image
                        source={require('../assets/plus2.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#fff',
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props}/>
                )
            }}/>

            <Tab.Screen name="Chat" component={ChatScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/discuter.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        <Text
                            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12, marginBottom: 10,}}>
                            Chat
                        </Text>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/settings.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? '#e32f45' : '#748c94',
                            }}
                        />
                        <Text
                            style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12, marginBottom: 10,}}>
                            Settings
                        </Text>
                    </View>
                ),
            }}/>
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
