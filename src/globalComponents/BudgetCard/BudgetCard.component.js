import React, { Component } from 'react';
import {View, Text, TouchableHighlight, Alert, StyleSheet } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import * as Progress from 'react-native-progress';
import {styles, identifier} from './BudgetCard.style'


export default class BudgetCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount:50,
      description: props.description,
      valueUtilized: 0.3,
      styles: styles,
      colorIdentifier:identifier(props.color)
    }

    this._onPressButton = this._onPressButton.bind(this);
  }

  

  _onPressButton() {
    this.props.navigate.navigate('NewExpense')
  }

  render() {
    console.log(this.state.colorIdentifier)
    return (
      <TouchableHighlight onPress={() => this._onPressButton()} style={this.state.styles.card}>
        <View style={this.state.styles.flexbox}>
            <View style={this.state.styles.colorIdentifierRow}>
              <View style={this.state.colorIdentifier}></View>
            </View>
            <View style={this.state.styles.textRow}>
              <Text style={this.state.styles.text}>{this.state.description}</Text>
              <Text style={this.state.styles.text}>{this.state.amount}</Text>
            </View>
            
            <View style={this.state.styles.progressBarRow}>
              <Progress.Bar style={{marginTop:'4.5%'}} progress={this.state.valueUtilized} height={10} width={160}/>
            </View>
        </View>
          
      </TouchableHighlight>
    );
  }
}


