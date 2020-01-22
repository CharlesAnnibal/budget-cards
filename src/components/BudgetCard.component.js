import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Alert } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-community/async-storage';


export default class BudgetCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount:props.value,
      description: props.description,
      valueUtilized: props.valueUtilized,
      styles: this.styles(props.color),
      navigate: props.navigate
    }
  }

  _onPressButton() {
      AsyncStorage.getAllKeys().then(r =>   {
      console.log("teste 3   ---- ",r)
    });
  }



  render() {
    return (
      <TouchableHighlight onPress={() => this._onPressButton()} style={this.state.styles.card}>
        <Grid style={this.state.styles.grid}>
          <Row size={2} style={this.state.styles.colorIdentifierRow}></Row>
          <Row size={10} >
            <Col style={{justifyContent:'center'}} ><Text style={this.state.styles.text}>{this.state.description}</Text></Col>
            <Col style={{justifyContent:"center"}}><Text style={this.state.styles.text}>{this.state.amount}</Text></Col>
          </Row>
          <Row size={2} style={this.state.styles.progressBarRow}>
            <Progress.Bar progress={this.state.valueUtilized} height={10} />
          </Row>
        </Grid>
      </TouchableHighlight>
    );
  }

  styles(color) {
    return StyleSheet.create({
      card: {
        width: '47%',
        marginHorizontal: '1.5%',
        marginVertical: '3%',
        height: 80,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#777',
      },
      colorIdentifierRow: {
        backgroundColor: color,
        width: '100%'
      },
      progressBarRow: {
        justifyContent: 'center'
      },
      overviewCenter: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      grid: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        borderRadius: 5,
        paddingBottom:10,
      },
      text: {
        fontSize: 14,
        justifyContent: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#555',
        /*textShadowColor: '#000',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 3*/
      }
    })
  }
}

