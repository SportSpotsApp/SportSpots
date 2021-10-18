import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from "react-native";
import auth from "@react-native-firebase/auth";
import {useNavigation ,CommonActions} from "@react-navigation/native";

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
       const unsubscribe = auth().onAuthStateChanged((user:any) => {
           if(user){
               // call windows after login
               navigation.dispatch(
                   CommonActions.navigate({
                       name: 'Settings',
                       params: {
                           headerLeft: ()=> null,
                           gestureEnabled: false,
                       },
                   })
               );
           }
       })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
            auth().createUserWithEmailAndPassword(email, password)
          .then((userCredentials:any) => {
              const user = userCredentials.user;
          })
          .catch((error:any) => Alert.alert(error.message))
    }

    const handleLogin = () => {
            auth().signInWithEmailAndPassword(email, password)
            .then((userCredentials:any) => {
            const user = userCredentials.user;
        })
            .catch((error:any) => Alert.alert(error.message))
    }

  return (
      <KeyboardAvoidingView style={styles.container}
      behavior="padding"
      >
          <View style={styles.inputContainer}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
                ></TextInput>
            <TextInput
                  placeholder="Mot de passe"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  style={styles.input}
                  secureTextEntry
            ></TextInput>
          </View>

          <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
              <TouchableOpacity
                  onPress={handleSignUp}
                  style={[styles.button, styles.buttonOutline]}
              >
                  <Text style={styles.buttonOutlineText}>S'inscrire</Text>
              </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    inputContainer: {
        width: '80%',
    },

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },

    button: {
        backgroundColor: 'blue',
        width: '100%',
        padding: 15,
        borderRadius: 10,
    },

    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: "grey",
        borderWidth: 2,
    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },

    buttonOutlineText: {
        color: 'blue',
        fontWeight: '700',
        fontSize: 16,
    }

})
