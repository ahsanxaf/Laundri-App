// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';


function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

export default App;