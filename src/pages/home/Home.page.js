import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-native-easy-grid'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import CardOverview from './components/CardOverview';
import BudgetCard from '../../components/BudgetCard.component';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import styles from './Home.style'
import BudgetListContainer from '../../containers/storage/budget/BudgetListContainer';

class Home extends Component {
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
            budgetList: [],
        }
    }

    componentDidMount() {
        
    

    }

    componentWillUnmount() {
        // Remove the event listener
        //this.focusListener.remove();
    }

    render() {
        const { navigate } = this.props.navigation;

        


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
                            <View style={styles.BudgetListContainer}>
                                <BudgetListContainer />
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

export default withNavigationFocus(Home);


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
