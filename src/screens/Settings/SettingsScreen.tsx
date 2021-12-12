import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Linking, useColorScheme } from 'react-native';
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
        <View>
            <Text style={styles.header}>Compte</Text>

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
        </View >
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
        width: 15,
        height: 15,
        tintColor: '#748c94',
    },
});
