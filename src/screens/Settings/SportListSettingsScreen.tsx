import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Image, FlatList } from 'react-native';
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

  const addSportToSportList = () => {
    // Add sport to sport list if it is not already in the list and if the list size is less than 5
    if (sport !== '' && savedSportList.indexOf(sport) === -1 && savedSportList.length < 5) {
      savedSportList.push(sport);
      setSport('');
    }
  }

  const removeSportFromSportList = (item: string) => {
    // Remove item from sport list
    savedSportList.splice(savedSportList.indexOf(item), 1);
    this.setState({ savedSportList: savedSportList });
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
          onPress={addSportToSportList}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={savedSportList}
          renderItem={({ item }) => {
            return (
              <View style={styles.row}>
                <View>
                  <Text style={styles.rowTitle}>{item}</Text>
                </View>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => { removeSportFromSportList(item); }}>
                  <Image
                    source={require('../../../assets/images/times-solid.png')}
                    resizeMode="contain"
                    style={styles.rowIcon}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View >
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  rowTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#8d8d8d',
  },
  rowSubtitle: {
    fontSize: 16,
    color: '#8d8d8d',
  },
  rowIcon: {
    width: 20,
    height: 20,
    tintColor: '#8d8d8d',
  },
});
