import React from 'react';

import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';

import { createStackNavigator } from '@react-navigation/stack';
import store from "./redux/store";
import 'react-native-gesture-handler';
import HomeScreen from './pages/home/index';
import NewBudget from './pages/budget/New.page';
import EditBudget from './pages/budget/Edit.page';
import NewExpense from './pages/expense/New.page';
import Reactotron from 'reactotron-react-native'
import ReactrotronConfig from './services/reactrotron';
if (__DEV__) {
    import('./services/reactrotron').then(() => console.log('Reactotron Configured'))
}

const Stack = createStackNavigator();

const headerStyle = {
    headerStyle: {
        backgroundColor: '#114acf',
    },
    headerTintColor: '#fff'
}

export default function App() {
    return (
        Reactotron.log('hello rendering world'),

        <Provider store={store}>
            <NavigationContainer>
                <MenuProvider>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={HomeScreen} options={headerStyle} />
                        <Stack.Screen name="Budget/new" component={NewBudget} options={headerStyle} />
                        <Stack.Screen name="Budget/edit" component={EditBudget} options={headerStyle} />
                        <Stack.Screen name="Expense/new" component={NewExpense} options={headerStyle} />
                    </Stack.Navigator>
                </MenuProvider>
            </NavigationContainer>
        </Provider>

    )
}