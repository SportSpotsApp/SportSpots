import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomInput from "../../components/CustomInput/CustomInput";
import { CustomButton } from '../../components/CustomButton/CustomButton';
import auth from "@react-native-firebase/auth";
import { CommonActions, useNavigation } from '@react-navigation/native'

const PasswordSettingsSreen = () => {
  const navigation = useNavigation()

  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('');
  const [passwordVerif, setPasswordVerif] = useState('');

  const handlePasswordChange = () => {
    if (!oldPassword || !password || !passwordVerif) {
      Alert.alert("Veuillez renseigner tous les champs");
      return
    }
    else {
      if (password !== passwordVerif) {
        Alert.alert("Les mots de passe ne sont pas identiques");
        return;
      }
      console.log(oldPassword, password, passwordVerif)
      console.log(auth().currentUser?.email)
      // reauthenticating
      auth().currentUser?.reauthenticateWithCredential(auth.EmailAuthProvider.credential(auth().currentUser?.email || '', oldPassword))
        .then(() => {
          console.log("reauthenticated")
          // updating password
          auth().currentUser?.updatePassword(password)
        })
        .catch(error => {
          Alert.alert(error.message)
          console.log(error)
        })
    }

    /*
    // Navigate to the previous screen
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Settings',
        params: {
          headerLeft: null,
          gestureEnabled: false,
        },
      })
    );*/
  }

  return (
    <View>
      <Text style={styles.header}>Mot de passe</Text>
      <View style={styles.container}>
        <Text style={styles.subheader}>
          Veuillez renseigner votre mot de passe actuel.
        </Text>
        <CustomInput
          placeholder="Mot de passe actuelle"
          value={oldPassword}
          setValue={setOldPassword}
          secureTextEntry
        />
        <Text style={styles.subheader}>
          Veuillez renseigner votre nouveau mot de passe.
        </Text>
        <CustomInput
          placeholder="Nouveau mot de passe"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirmer le mot de passe"
          value={passwordVerif}
          setValue={setPasswordVerif}
          secureTextEntry
        />
        <CustomButton
          text="Changer de mot de passe"
          onPress={() => { handlePasswordChange() }}
        />
      </View>
    </View>
  );
};

export default PasswordSettingsSreen;

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
