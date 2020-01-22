import React, { Component } from 'react';
import Alert from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export default class NewBudget extends Component {
    constructor() {
        super();

        this.state = {
            "budget":null,
            "amount": "",
            "description": "",
            "color": "",
            "dateStart": "",
            "dateEnd": ""
        }

        this._onpressSaveButton = this._onpressSaveButton.bind(this);
        this._onChangeText = this._onChangeText.bind(this);
    }

    _onpressSaveButton = ()=>{
        let timeInMs = Date.now();
        let objNewBudget = {
            "amount": this.state.amount,
            "description": this.state.description,
            "color": this.state.color,
            "dateStart": this.state.dateStart,
            "dateEnd": this.state.dateEnd,
        }
        console.log("pqqqq",objNewBudget)
        this.setState({
            budget:objNewBudget
        },async ()=>{
            console.log("saving budget",this.state.budget)
            try{
                await AsyncStorage.setItem('budget@'+timeInMs, JSON.stringify(this.state.budget));
            }catch(e){
                console.log(e);
            }
            
        })
        
    }

    _onChangeText (editedState, newValue){
        this.setState({[editedState]:newValue},()=>{
            console.log(this.state)
        })
    }

    componentDidMount() {
        
        //AsyncStorage.setItem('@MyApp_key2', 'my secret value')
    }

    static navigationOptions = {
        title: 'New budget',
        headerStyle: {
            backgroundColor: '#114acf',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    };


    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Amount"  onChangeText={(event)=>{this._onChangeText("amount",event)}} />
                        </Item>
                        <Item>
                            <Input placeholder="Description"  onChangeText={(event)=>{this._onChangeText("description",event)}} />
                        </Item>
                        <Item>
                            <Input placeholder="Color"  onChangeText={(event)=>{this._onChangeText("color",event)}} />
                        </Item>
                        <Item>
                            <Input placeholder="Date of start"  onChangeText={(event)=>{this._onChangeText("dateStart",event)}} />
                        </Item>
                        <Item last>
                            <Input placeholder="Date of end"  onChangeText={(event)=>{this._onChangeText("dateEnd",event)}} />
                        </Item>
                    </Form>
                    <Button block primary onPress={this._onpressSaveButton}>
                        <Text>Save Budget</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}