import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import { CustomButton } from '../../components/CustomButton/CustomButton';
import auth from "@react-native-firebase/auth";
import { CommonActions, useNavigation } from '@react-navigation/native'

const ChangeEmail = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('');

  const handleEmailChange = () => {
    auth().currentUser?.updateEmail(email)
      .then(() => {
        Alert.alert("Email changed successfully")
      }).catch(error => {
        Alert.alert(error.message)
      })

    // Navigate to the previous screen
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Settings',
        params: {
          headerLeft: null,
          gestureEnabled: false,
        },
      })
    );
  }

  return (
    <View>
      <Text style={styles.header}>Change Email</Text>

      <View style={styles.row}>
        <Text style={{ color: '#8d8d8d', fontSize: 16, paddingBottom: 20 }}>
          Votre adresse actuelle est : {auth().currentUser?.email}
        </Text>

        <CustomInput
          placeholder="Nouvelle adresse email"
          value={email}
          setValue={setEmail}
        />

        <CustomButton
          text="Changer d'adresse email"
          onPress={() => { handleEmailChange() }}
        />
      </View>
    </View>
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
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
  },
});
