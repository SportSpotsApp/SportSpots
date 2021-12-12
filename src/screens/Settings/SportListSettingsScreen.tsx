import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { CustomPicker } from '../../components/CustomPicker/CustomPicker';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native'
import { SportList } from '../../models/Sport';

const SportListSettingsScreen = () => {
  const navigation = useNavigation();

  const [sport, setSport] = useState('');

  var savedSportList: string[] = [
    'Football',
    'Basketball',
    'Volleyball',
    'Tennis',
    'Table Tennis',
  ];

  const handleSportListChange = () => {

  }

  return (
    <View>
      <Text style={styles.header}>Sports favoris</Text>
      <View style={styles.container}>
        <Text style={styles.subheader}>
          Cherchez un sport qui vous intéresse et appuyez sur le bouton pour ajouter.
        </Text>
        <CustomPicker
          value={sport}
          setValue={setSport}
          mode="dropdown"
          list={SportList}
        />
        <CustomButton
          text="Ajouter"
          onPress={handleSportListChange}
        />
      </View>
      <View>
        //Display saved sport list
        <FlatList
          data={savedSportList}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    </View>
  );
};

export default SportListSettingsScreen;

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
