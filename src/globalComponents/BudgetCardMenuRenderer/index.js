import React from 'react';
import View from 'react-native';

export const BudgetCardMenuRenderer = (props) => {
    const { style, children, layouts, ...other } = props;
    const position = { top: 50, left: 0 }
    return (
        <View {...other} style={[{backgroundColor:'#ccc'}, position]}>
            {children}
        </View>
    );
};
