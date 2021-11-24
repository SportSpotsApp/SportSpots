/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Navigation from "./src/navigation/Navigation";
import {SafeAreaView, StyleSheet} from "react-native";

const App = () => {
  return (
      <SafeAreaView style={styles.root}>
          <Navigation />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
   root: {
       flex: 1,
       backgroundColor: '#F9FBFC',
   },
});

export default App;
