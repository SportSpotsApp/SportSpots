import React from 'react';
import store from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import BaseNavigator from "./src/navigation/BaseNavigator";

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <BaseNavigator />
            </NavigationContainer>
        </Provider>
    );
}

export default App;
