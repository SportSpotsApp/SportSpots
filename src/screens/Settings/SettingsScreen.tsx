import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Alert, Linking } from 'react-native';
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

    return (
        <View>
            <Text style={styles.header}>Compte</Text>

            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Email
                    </Text>
                    <Text style={{ color: '#8d8d8d', fontSize: 16 }}>
                        {auth().currentUser?.email}
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.row} onPress={handleSignOut}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Se deconnecter
                    </Text>
                    <Text style={{ color: '#8d8d8d', fontSize: 16 }}>

                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>Et juste ici, un petit geranium</Text>
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

            <TouchableOpacity style={styles.row} onPress={() => { Linking.openURL("https://gitlab.com/creatibofficiel/sportspots"); }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Code source
                    </Text>
                    <Text style={{ color: '#8d8d8d', fontSize: 16 }}>
                        Gitlab.com
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>Et juste ici, un petit geranium</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={() => { Linking.openURL("https://gitlab.com/creatibofficiel/sportspots"); }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Aide en ligne
                    </Text>
                    <Text style={{ color: '#8d8d8d', fontSize: 16 }}>

                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>Et juste ici, un petit geranium</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={() => { Linking.openURL("https://gitlab.com/creatibofficiel/sportspots"); }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Equipe de developpement
                    </Text>
                    <Text style={{ color: '#8d8d8d', fontSize: 16 }}>
                        SportSpots corp
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>Et juste ici, un petit geranium</Text>
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
