import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import auth from "@react-native-firebase/auth";
import { CommonActions, useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {
    const navigation = useNavigation()

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

    return (
        <View>
            <Text style={styles.header}>Compte</Text>

            <TouchableOpacity style={styles.row} onPress={modifyEmail}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Email
                    </Text>
                    <Text style={{ color: '#8d8d8d', fontSize: 16 }}>
                        Changer votre adresse email
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/chevron-right-solid.png')}
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: '#748c94',
                        }}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={modifyPassword}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Mot de passe
                    </Text>
                    <Text style={{ color: '#8d8d8d', fontSize: 16 }}>
                        Changer votre mot de passe
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/chevron-right-solid.png')}
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: '#748c94',
                        }}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={handleSignOut}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Se deconnecter
                    </Text>
                    <Text style={{ color: '#8d8d8d', fontSize: 16 }}>

                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/chevron-right-solid.png')}
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: '#748c94',
                        }}
                    />
                </View>
            </TouchableOpacity>

            <Text style={styles.header}>A propos</Text>

            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Version de l'aplication
                    </Text>
                    <Text style={{ color: '#8d8d8d', fontSize: 16 }}>
                        Alpha 0.1.2
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.row} onPress={() => { Linking.openURL("https://sportspots.fr"); }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Site web
                    </Text>
                    <Text style={{ color: '#8d8d8d', fontSize: 16 }}>
                        sportspots.fr
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/external-link-alt-solid.png')}
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: '#748c94',
                        }}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={() => { Linking.openURL("mailto:sportspots.corp@gmail.com"); }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Contactez nous
                    </Text>
                    <Text style={{ color: '#8d8d8d', fontSize: 16 }}>
                        sportspots.corp@gmail.com
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={require('../../../assets/images/external-link-alt-solid.png')}
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: '#748c94',
                        }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: "bold",
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
});
