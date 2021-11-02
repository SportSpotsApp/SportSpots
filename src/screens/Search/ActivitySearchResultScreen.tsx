import React from "react";
import {View, FlatList} from "react-native";
import Activity from "../../components/Activity/Activity";

import activities from '../../../assets/data/activities'

const SearchResultScreen = (props:any) => {
    return (
      <View>
          <FlatList
              data={activities}
              renderItem={({item}) => <Activity activity={item} />}
              />
      </View>
    );
};

export default SearchResultScreen;
