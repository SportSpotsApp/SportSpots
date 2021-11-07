import React from "react";
import {View, FlatList} from "react-native";
import ActivityComponent from "../../components/Activity/ActivityComponent";

import activities from '../../../assets/data/activities'

const SearchResultScreen = (props:any) => {
    return (
      <View>
          <FlatList
              data={activities}
              renderItem={({item}) => <ActivityComponent activity={item} />}
              />
      </View>
    );
};

export default SearchResultScreen;
