import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'



export default class BudgetCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.description,
      valueUtilized: props.valueUtilized,
      styles: this.styles(props.color),
      navigate: props.navigate
    }
  }

  _onPressButton() {
    console.log(this.state.navigate)
    this.state.navigate.navigate('EditBudget', {name: 'Jane'})
  }


  render() {
    return (
        <TouchableHighlight onPress={() => this._onPressButton()} style={this.state.styles.card}>
          <Grid style={this.state.styles.grid}>
          <Row size={1} style={this.state.styles.colorIdentifier}></Row>
            <Row size={1} style={this.state.styles.colorIdentifier}></Row>
            <Row size={4} >
              <Col style={this.state.styles.center}><Text style={this.state.styles.text}>{this.state.description}</Text></Col>
              <Col  style={this.state.styles.center}><Text style={this.state.styles.text}>{this.state.valueUtilized}</Text></Col>
            </Row>
            <Row size={4}  style={this.state.styles.center}><Text style={this.state.styles.text}>{this.state.valueUtilized}</Text></Row>
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
        borderRadius: 5
      },
      colorIdentifier:{
        backgroundColor: color,
        width:'100%'
      },
      overviewCenter:{
        alignItems: 'center',
        justifyContent: 'center',
      },
      grid: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        borderRadius: 5
      },
      center:{
        justifyContent: 'center'
      },
      text: {
        fontSize:14,
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

