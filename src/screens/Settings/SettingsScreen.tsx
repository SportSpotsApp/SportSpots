import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert, Linking, Animated } from 'react-native';
import auth from "@react-native-firebase/auth";
import Slider from "react-native-slider";
import { CommonActions, useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {
    const navigation = useNavigation()

    const [notificationRadius, setNotificationRadius] = useState(0);

    const handleSignOut = () => {
        auth().signOut()
            .then(() => {
                // call windows after login
                navigation.dispatch(
                    CommonActions.navigate({
                        name: 'Home',
                        params: {
                            headerLeft: null,
                            gestureEnabled: false,
                        },
                    })
                );
            })
            .catch((error: any) => Alert.alert(error.message))
    }

    const modifyEmail = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'ModifyEmail',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                },
            })
        );
    }

    const modifyPassword = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'ModifyPassword',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                },
            })
        );
    }

    const modifySportList = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'ModifySportList',
                params: {
                    headerLeft: null,
                    gestureEnabled: false,
                },
            })
        );
    }

    return (
        <ScrollView>
            <Text style={styles.header}>Paramètres du Compte</Text>

            <TouchableOpacity style={styles.row} onPress={modifyEmail}>
                <View>
                    <Text style={styles.rowTitle}>
                        Email
                    </Text>
                    <Text style={styles.rowSubtitle}>
                        Changer votre adresse email
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/chevron-right-solid.png')}
                        resizeMode="contain"
                        style={styles.rowIcon}
                    />
                </View>
            </TouchableOpacity >

            <TouchableOpacity style={styles.row} onPress={modifyPassword}>
                <View>
                    <Text style={styles.rowTitle}>
                        Mot de passe
                    </Text>
                    <Text style={styles.rowSubtitle}>
                        Changer votre mot de passe
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/chevron-right-solid.png')}
                        resizeMode="contain"
                        style={styles.rowIcon}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={handleSignOut}>
                <View>
                    <Text style={styles.rowTitle}>
                        Se deconnecter
                    </Text>
                    <Text style={styles.rowSubtitle}>

                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/chevron-right-solid.png')}
                        resizeMode="contain"
                        style={styles.rowIcon}
                    />
                </View>
            </TouchableOpacity>

            <Text style={styles.header}>Paramètres de l'application</Text>

            <TouchableOpacity style={styles.row} onPress={modifySportList}>
                <View>
                    <Text style={styles.rowTitle}>
                        Sport favoris
                    </Text>
                    <Text style={styles.rowSubtitle}>
                        Liste des sports qui vous intéressent
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/chevron-right-solid.png')}
                        resizeMode="contain"
                        style={styles.rowIcon}
                    />
                </View>
            </TouchableOpacity>

            <View style={styles.row}>
                <View style={{ width: "100%" }}>
                    <Text style={styles.rowTitle}>
                        Rayon des notifications
                    </Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Slider
                            style={{ flex: 1 }}
                            value={notificationRadius}
                            onValueChange={setNotificationRadius}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            minimumTrackTintColor="#0f7eaa"
                            maximumTrackTintColor="#d3d3d3"
                            thumbTintColor="#0f7eaa"
                        />
                        <Text style={{ alignSelf: "center", marginLeft: 5, width: 55 }}>
                            {notificationRadius} km
                        </Text>
                    </View>
                </View>
            </View>

            <Text style={styles.header}>A propos</Text>

            <View style={styles.row}>
                <View>
                    <Text style={styles.rowTitle}>
                        Version de l'aplication
                    </Text>
                    <Text style={styles.rowSubtitle}>
                        Alpha 0.1.2
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.row} onPress={() => { Linking.openURL("https://sportspots.fr"); }}>
                <View>
                    <Text style={styles.rowTitle}>
                        Site web
                    </Text>
                    <Text style={styles.rowSubtitle}>
                        sportspots.fr
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/external-link-alt-solid.png')}
                        resizeMode="contain"
                        style={styles.rowIcon}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={() => { Linking.openURL("mailto:sportspots.corp@gmail.com"); }}>
                <View>
                    <Text style={styles.rowTitle}>
                        Contactez nous
                    </Text>
                    <Text style={styles.rowSubtitle}>
                        sportspots.corp@gmail.com
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/external-link-alt-solid.png')}
                        resizeMode="contain"
                        style={styles.rowIcon}
                    />
                </View>
            </TouchableOpacity>
        </ScrollView >
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#8d8d8d",
        paddingTop: 20,
        marginHorizontal: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    rowTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#8d8d8d',
    },
    rowSubtitle: {
        fontSize: 16,
        color: '#8d8d8d',
    },
    rowIcon: {
        width: 20,
        height: 20,
        tintColor: '#8d8d8d',
    },
});
