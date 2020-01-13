import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/home/Home.screen';
import NewBudget from './screens/budget/New.screen';
import EditBudget from './screens/budget/Edit.screen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  NewBudget: {screen: NewBudget},
  EditBudget: {screen: EditBudget}
});

const App = createAppContainer(MainNavigator);

export default App;

/*export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
