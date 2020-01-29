import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../pages/home/Home.page';
import NewBudget from '../pages/budget/New.page';
import EditBudget from '../pages/budget/Edit.page';
import NewExpense from '../pages/expense/New.page';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  NewBudget: { screen: NewBudget },
  EditBudget: { screen: EditBudget },
  NewExpense: {screen:NewExpense}
});

const AppContainer = createAppContainer(MainNavigator);

export default class NavigationContainer extends React.Component{
  render(){
    return <AppContainer/>;
  }
}