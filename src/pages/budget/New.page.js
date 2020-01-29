import React, { Component } from 'react';
import Alert from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, DatePicker } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import BudgetStorage from '../../containers/storage/BudgetStorageContainer'

export default class NewBudget extends Component {
    constructor() {
        super();

        this.state = {
            "budget": null,
            "amount": "",
            "description": "",
            "color": "",
            "today": [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()],
            "dateStart": new Date(),
            "showDateStartPicker": false,
            "showDateEndPicker": false,
            "dateEnd": new Date()
        }

        this._onpressSaveButton = this._onpressSaveButton.bind(this);
        this._setDateStart = this._setDateStart.bind(this);
        this._setDateEnd = this._setDateEnd.bind(this);
        this._showDateStartPicker = this._showDateStartPicker.bind(this);
        this._showDateEndPicker = this._showDateEndPicker.bind(this);
    }

    _onpressSaveButton = () => {
        let objNewBudget = {
            "amount": this.state.amount,
            "description": this.state.description,
            "color": this.state.color,
            "dateStart": this.state.dateStart,
            "dateEnd": this.state.dateEnd,
        }


        this.setState({
            budget: objNewBudget
        }, async () => {
            try {
                BudgetStorage.createBudget(this.state.budget);
            } catch (e) {
                console.log(e);
            }
            finally {
                this.props.navigation.goBack()
            }
        })
    }

    _onChangeText(editedState, newValue) {
        this.setState({ [editedState]: newValue }, () => {
            console.log(this.state)
        })
    }

    _setDateStart(event, newDate) {
        console.log(newDate)
        this.setState({ dateStart: newDate, showDateStartPicker: false })
    }

    _setDateEnd(event, newDate) {
        this.setState({ dateEnd: newDate, showDateEndPicker: false })
    }

    _showDateStartPicker() {
        let showDateStartPicker = this.state.showDateStartPicker ? false : true;
        this.setState({ showDateStartPicker: showDateStartPicker })
    }

    _showDateEndPicker() {
        let showDateEndPicker = this.state.showDateEndPicker ? false : true;
        this.setState({ showDateEndPicker: showDateEndPicker })
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
                            <Input placeholder="Amount" onChangeText={(event) => { this._onChangeText("amount", event) }} />
                        </Item>
                        <Item>
                            <Input placeholder="Description" onChangeText={(event) => { this._onChangeText("description", event) }} />
                        </Item>
                        <Item>
                            <Input placeholder="Color" onChangeText={(event) => { this._onChangeText("color", event) }} />
                        </Item>
                        <Item>
                            {this.state.showDateStartPicker && <DateTimePicker value={this.state.dateStart}
                                mode='date'
                                is24Hour={true}
                                display="default"
                                onChange={this._setDateStart} />
                            }
                            <Text placeholder="Date start" style={{ width: '70%' }}>{this.state.dateStart.toDateString()}</Text>
                            <Button block primary onPress={this._showDateStartPicker}>
                                <Text>Select date</Text>
                            </Button>

                        </Item>

                        <Item>
                            {this.state.showDateEndPicker && <DateTimePicker value={this.state.dateEnd}
                                mode='date'
                                is24Hour={true}
                                display="default"
                                onChange={this._setDateEnd} />
                            }
                            <Text placeholder="Date end" style={{ width: '70%' }}>{this.state.dateEnd.toDateString()}</Text>
                            <Button block primary onPress={this._showDateEndPicker}>
                                <Text>Select date</Text>
                            </Button>

                        </Item>

                        <Item last>
                            <Input placeholder="Date of end" onChangeText={(event) => { this._onChangeText("dateEnd", event) }} />
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