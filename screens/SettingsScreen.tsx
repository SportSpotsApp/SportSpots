import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import auth from "@react-native-firebase/auth";
import {CommonActions, useNavigation} from '@react-navigation/native'

const SettingsScreen = () => {
    const navigation = useNavigation()

    const handleSignOut = () => {
        auth().signOut()
           .then(() => {
               // call windows after login
               navigation.dispatch(
                   CommonActions.navigate({
                       name: 'Login',
                       params: {
                           headerLeft: null,
                           gestureEnabled: false,
                       },
                   })
               );
           })
           .catch((error:any) => Alert.alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
            <Text>Email : {auth().currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}>
                <Text style={styles.buttonText}>Se déconnecter</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: 'blue',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        marginTop: 40,
    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});
