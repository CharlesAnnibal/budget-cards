import React, { Component } from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from "react-navigation";
import { Grid, Row } from 'react-native-easy-grid';
import { Text, Container, Footer, FooterTab, Button } from 'native-base';
import CardOverview from './components/CardOverview';
import BudgetList from '../../globalComponents/BudgetList/index';
import ContextMenu from '../../globalComponents/ContextMenu';

import styles from './Home.style'

class Home extends Component {
    constructor(props) {
        console.log("MEUS PROPS:", props)
        super(props);
    }

    pressOnAnyWhere() {
        console.log("pressing")
        this.props.hideMenu();
    }

    /*loadBudgets() {
        RealmConnection().then(realm => {
            this.props.getAllBudgets()
            realm.close();
        });
    }*/

    componentDidMount() {
        console.log("PROPS:::", this.props.hideMenu)
        //this.loadBudgets();

        const { navigation } = this.props;
        this.focusListener = navigation.addListener("focus", () => {
            this.props.getAllBudgets()
        });
    }

    componentWillUnmount() {
        // Remove the event listener
        this.focusListener.remove();
    }

    render() {
        console.log("home render",this.props)
        const { navigate } = this.props.navigation;
        return (
            <TouchableWithoutFeedback onPress={() => this.pressOnAnyWhere()}>
                <Container >
                    <ContextMenu />
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
                                    <BudgetList navigation={navigate}/>
                                </View>
                            </ScrollView>
                        </Row>
                    </Grid>

                    <Footer>
                        <FooterTab style={styles.footer} >
                            <Button
                                title="Go to Jane's profile"
                                onPress={() => navigate('Budget/new', { name: 'Jane' })}
                            ><Text style={styles.footerText}>New Budget</Text></Button>
                            <Button
                                title="Go to Jane's profile"
                            ><Text style={styles.footerText}>New Objective</Text></Button>
                            <Button
                                title="Go to Jane's profile"
                            ><Text style={styles.footerText}>About</Text></Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        )
    }
}

export default withNavigation(Home)