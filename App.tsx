/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import Navigation from "./src/navigation/Navigation";
import {SafeAreaView, StyleSheet} from "react-native";
import {firebase} from "@react-native-firebase/auth";
import Tabs from "./src/navigation/Tabs";



const App = () => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        return firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }

            setLoading(false);
        });
    }, []);

    if (loading) return null; // Render loading/splash screen etc

    if (!authenticated) {
        return <Navigation nameOfScreen={"Home"}/>;
    }

    return <Navigation nameOfScreen={"Menu"}/>;

}

const styles = StyleSheet.create({
   root: {
       flex: 1,
       backgroundColor: '#F9FBFC',
   },
});

export default App;
