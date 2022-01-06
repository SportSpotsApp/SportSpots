import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomInput from "../../components/Form/CustomInput/CustomInput";
import { CustomButton } from '../../components/Form/CustomButton/CustomButton';
import auth from "@react-native-firebase/auth";
import { CommonActions, useNavigation } from '@react-navigation/native'

const EmailSettingsSreen = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('');

  const handleEmailChange = () => {
    if (!email) {
      Alert.alert("Veuillez renseigner tous les champs");
    }
    auth().currentUser?.updateEmail(email)
      .then(() => {
        Alert.alert("Votre email a bien été modifié");
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
      <Text style={styles.header}>Email</Text>

      <View style={styles.container}>
        <Text style={styles.subheader}>
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

export default EmailSettingsSreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 20,
    marginHorizontal: 20,
  },
  subheader: {
    fontSize: 16,
    color: '#8d8d8d',
    paddingBottom: 20,
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
  },
});
