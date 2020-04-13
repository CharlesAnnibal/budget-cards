import React from 'react';
import {Grid, Row} from 'react-native-easy-grid';
import {View, ScrollView } from 'react-native';
import CardOverview from './components/CardOverview';
import { Text, Container, Footer, FooterTab, Button } from 'native-base';
import styles from './Home.style'
import BudgetList from '../../globalComponents/BudgetList/BudgetList';
import ContextMenu from '../../globalComponents/ContextMenu';

const Home = (props) =>{
    const { navigate } = props.navigation;
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
                                  <BudgetList /> 
                            </View>
                        </ScrollView>
                    </Row>
                </Grid>
                <ContextMenu />
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

        )
}

export default Home;