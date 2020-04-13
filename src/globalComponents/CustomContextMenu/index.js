import React, {ReactDOM, useState, forwardRef, useImperativeHandle } from 'react';
import { Animated, View, Text } from 'react-native';
import { styles } from './style.js';

const CustomContextMenu = forwardRef((props, ref) => {
    //const [showMenu, setShowMenu] = useState(false);
    const [initialValue] = useState(new Animated.Value(0));
    const [beforeAnimValue, setBeforeAnimValue] = useState(initialValue);
    const [afterAnimValue, setAfterAnimValue] = useState(0);

    React.useEffect(() => {
        Animated.timing(
            beforeAnimValue,
          {
            toValue: afterAnimValue,
            duration: 500,
            useNativeDriver:true
          }
        ).start();
      }, [beforeAnimValue])
    
    useImperativeHandle(ref, () => ({
        toggleMenu() {
           
            props.showingMenu ? setBeforeAnimValue(new Animated.Value(1)) : setBeforeAnimValue(new Animated.Value(0))
            props.showingMenu ? setAfterAnimValue(0) : setAfterAnimValue(1)
        }
    }))

    return (
        <Animated.View                 // Special animatable View
            style={{
                opacity: beforeAnimValue, 
                position:'absolute',
                top:'100%'
        // Bind opacity to animated value
            }}
        >
            <View>
                <View><Text>New expense</Text></View>
                <View><Text>Edit this Budget</Text></View>
                <View><Text>Delete this Budget</Text></View>
            </View>
            
        </Animated.View>
    );

})
CustomContextMenu.displayName = "CustomContextMenu";
export default CustomContextMenu;
