import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-native-easy-grid'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import CardOverview from './components/CardOverview';
import BudgetCard from '../../components/BudgetCard.component';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {
            backgroundColor: '#114acf',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    };

    constructor() {
        super();

        this.state = {
            budgetList:[]
        }
    }

    componentDidMount(){
        try{
            AsyncStorage.getAllKeys().then(arrayKeys =>   {
                //console.log("ou",arrayKeys)
                let arrayBudgets = arrayKeys.map(key=>{
                    return AsyncStorage.getItem(key).then(budget=>{
                        return budget
                    })
                })
                Promise.all(arrayBudgets).then(results=>{
                    this.setState({
                        budgetList:results
                    })
                })
                
                /*this.setState({budgetList:r},()=>{
                    console.log("PAPAPA",this.state)
                })*/
            });
        }catch(e){

        }
    }

    render() {
        const { navigate } = this.props.navigation;

        const listBudgetCards = this.state.budgetList.map((jsonBudget, key) =>{
            let objBudget = JSON.parse(jsonBudget);
            objBudget.amount = isNaN(objBudget.amount) ? parseFloat(objBudget.amount) : objBudget.amount
            console.log("RENDER HOME - "+objBudget.amount,objBudget)

            let percent = 40 / objBudget.amount;

            return(
                <BudgetCard
                    value={objBudget.amount}
                    key={key}
                    description={objBudget.description}
                    color={objBudget.color}
                    valueUtilized={percent}
                    navigate={this.props.navigation}
                />
            )
        }
            
        );

        return (
            <Container>
                <Grid style={{ width: '100%' }}>
                    <Row size={1}>
                        <Grid>
                            <Row style={styles.topContainer}>
                                <CardOverview />
                            </Row>
                            <Row>
                            </Row>
                        </Grid>
                    </Row>
                    <Row size={2}>
                        <ScrollView style={styles.budgetCardsScrollView}>
                            <View style={styles.BudgetCardContainer}>
                                {
                                    listBudgetCards.length === 0 ? (
                                        <Text>Nenhum registo ainda</Text>
                                    ) : (listBudgetCards)
                                }
                                
                            </View>

                        </ScrollView>
                    </Row>
                </Grid>

                <Footer>
                    <FooterTab style={styles.footer} >
                        <Button
                            title="Go to Jane's profile"
                            onPress={() => navigate('NewBudget', { name: 'Jane' })}
                        ><Text style={styles.footerText}>New Budget</Text></Button>
                        <Button
                            title="Go to Jane's profile"
                            onPress={() => navigate('NewBudget', { name: 'Jane' })}
                        ><Text style={styles.footerText}>New Objective</Text></Button>
                        <Button
                            title="Go to Jane's profile"
                            onPress={() => navigate('NewBudget', { name: 'Jane' })}
                        ><Text style={styles.footerText}>About</Text></Button>
                    </FooterTab>
                </Footer>
            </Container>

        )
    }
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: '#fff',
        justifyContent: "center"
    },
    otherContainer: {
        backgroundColor: '#114acf',
    },

    budgetCardsScrollView: {
        backgroundColor: '#fff',
        width: '100%'
    },
    BudgetCardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    footer: {
        backgroundColor: '#114acf',
    },
    footerText: {
        color: "#fff"
    }
});

const budgetsList = [
    {
        value: 15,
        id: 1,
        description: "Água",
        color: "#148eff",
        valueUtilized: 0.15
    },
    {
        value: 20,
        id: 2,
        description: "Luz",
        color: "#e5ff3b",
        valueUtilized: 0.15
    },
    {
        value: 250,
        id: 3,
        description: "Aluguel",
        color: "#ff391f",
        valueUtilized: 0
    },
    {
        value: 80,
        id: 4,
        description: "Internet",
        color: "#ff391f",
        valueUtilized: 0
    },
    {
        value: 120,
        id: 5,
        description: "Mercado",
        color: "#7bc427",
        valueUtilized: 0.4
    },
    {
        value: 100,
        id: 6,
        description: "Restaurante",
        color: "#0a7007",
        valueUtilized: 0.7
    },
    {
        value: 20,
        id: 7,
        description: "Remédios",
        color: "#7bc427",
        valueUtilized: 1
    }
];
