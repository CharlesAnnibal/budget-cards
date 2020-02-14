import React, { Component } from 'react';
import {View, Text, TouchableHighlight, Alert, StyleSheet } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-community/async-storage';
import {styles, identifier} from './BudgetCard.style'


export default class BudgetCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount:props.value,
      description: props.description,
      valueUtilized: props.valueUtilized,
      styles: styles,
      colorIdentifier:identifier(props.color)
    }

    this._onPressButton = this._onPressButton.bind(this);
  }

  

  _onPressButton() {
    this.props.navigate.navigate('NewExpense')
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this._onPressButton()} style={this.state.styles.card}>
        <Grid style={this.state.styles.grid}>
          <Row size={2} style={this.state.colorIdentifier}></Row>
          <Row size={5} >
            <Col style={{justifyContent:'center'}} ><Text style={this.state.styles.text}>{this.state.description}</Text></Col>
            <Col style={{justifyContent:"center"}}><Text style={this.state.styles.text}>{this.state.amount}</Text></Col>
          </Row>
          <Row size={1} style={this.state.styles.progressBarRow}>
            <Col style={{justifyContent:"center"}}>
              <Progress.Bar progress={this.state.valueUtilized} height={10} width={null}/>
            </Col>  
          </Row>
        </Grid>
      </TouchableHighlight>
    );
  }
}


