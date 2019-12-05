import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-native-easy-grid'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import CardOverview from './components/CardOverview.component.jsx'
import BudgetCard from '../../components/BudgetCard.component.jsx';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';

export default class Home extends Component {
    constructor() {
        super();
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Header />
 
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
                                   {listBudgetCards}
                                </View>

                            </ScrollView>
                        </Row>
                    </Grid>
        
                <Footer>
                    <FooterTab>
                        <Button>
                            <Text>Apps</Text>
                        </Button>
                        <Button>
                            <Text>Camera</Text>
                        </Button>
                        <Button active>
                            <Text>Navigate</Text>
                        </Button>
                        <Button
                                title="Go to Jane's profile"
                                onPress={() => navigate('Profile', {name: 'Jane'})}
                            ><Text>Link</Text></Button>
                    </FooterTab>
                </Footer>
            </Container>

        )
    }
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: '#5b96f5',
        justifyContent: "center"
    },
    otherContainer: {
        backgroundColor: '#5b96f5',
    },
    
    budgetCardsScrollView: {
        backgroundColor: '#eee',
        width: '100%'
    },
    BudgetCardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
});

const budgetsList = [
    {
        value:15,
        id:1,
        description:"Água",
        color:"#148eff",
        valueUtilized:15
    },
    {
        value:20,
        id:2,
        description:"Luz",
        color:"#e5ff3b",
        valueUtilized:15
    },
    {
        value:250,
        id:3,
        description:"Aluguel",
        color:"#ff391f",
        valueUtilized:0
    },
    {
        value:80,
        id:4,
        description:"Internet",
        color:"#ff391f",
        valueUtilized:0
    },
    {
        value:120,
        id:5,
        description:"Mercado",
        color:"#7bc427",
        valueUtilized:40
    },
    {
        value:100,
        id:6,
        description:"Restaurante",
        color:"#0a7007",
        valueUtilized:150
    },
    {
        value:20,
        id:7,
        description:"Remédios",
        color:"#7bc427",
        valueUtilized:10
    }
];

const listBudgetCards = budgetsList.map((budget) =>
    <BudgetCard  
        value={budget.value} 
        key={budget.id} 
        description={budget.description}
        color={budget.color}  
        valueUtilized={budget.valueUtilized} />
);