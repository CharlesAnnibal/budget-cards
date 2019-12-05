import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-native-easy-grid'
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default class NewBudget extends Component {
    constructor() {
        super();
    }

    static navigationOptions = {
        title: 'New',
    };


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>tESTE</Text>
            </View>
        )
    }
}