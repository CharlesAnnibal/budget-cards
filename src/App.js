import React, {useState} from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import NavigationContainer from './containers/NavigationContainer'

export default function App(){
    return(
        <Provider store={store}>
            <NavigationContainer/>
        </Provider>
    )
}