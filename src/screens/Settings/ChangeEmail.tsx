import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import auth from "@react-native-firebase/auth";
import { CommonActions, useNavigation } from '@react-navigation/native'

const ChangeEmail = () => {
  const navigation = useNavigation()

  const handleEmailChange = () => {
    auth().currentUser?.updateEmail("yo@gmail.com")
      .then(() => {
        Alert.alert("Email changed successfully")
      }).catch(error => {
        Alert.alert(error.message)
      })
  }

  return (
    <Text style={styles.header}>Change Email</Text>
  );
};

export default ChangeEmail;

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
