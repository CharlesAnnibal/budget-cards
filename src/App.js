import React, {useState} from 'react';
import NavigationContainer from './containers/NavigationContainer'

export default function App(){
    const isReady = useState(false);
    return(
        <NavigationContainer/>
    )
}