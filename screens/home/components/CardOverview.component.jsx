import React, {Component} from 'react';
import {Grid, Col} from 'react-native-easy-grid'
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { StyleSheet, ScrollView, View } from 'react-native';

export default class CardOverview extends Component{
  constructor(){
    super();
  }

    render(){
        return(
            <Card style={styles.card}>
              <CardItem bordered style={styles.body}>
                <Body>
                  <Grid>
                    <Col size={3} style={styles.overviewLeft}><Text>150,00</Text></Col>
                    <Col size={4} style={styles.overviewCenter}><Text>15,00</Text></Col>
                    <Col size={3} style={styles.overviewRight}><Text>15/12/2019</Text></Col>
                  </Grid>
                </Body>
              </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
    width:"90%",
    height:"100%",
    marginTop:"10%",
  },
  body:{
    backgroundColor: '#5b96f5',
    height:"100%"
  },
  overviewLeft:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  overviewCenter:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'olive',
  },
  overviewRight:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});