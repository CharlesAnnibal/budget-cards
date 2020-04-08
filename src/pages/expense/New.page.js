import React, { Component } from 'react';
import Alert from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, DatePicker } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class NewExpense extends Component {
    constructor() {
        super();

        this.state = {
            "idBudget": null,
            "value": "",
            "date": new Date()
        }

        this._onpressSaveButton = this._onpressSaveButton.bind(this);
        this._setDate = this._setDate.bind(this);
        this._showDatePicker = this._showDatePicker.bind(this);
    }

    _onpressSaveButton = () => {
        let objNewExpense = {
            "value": this.state.amount,
            "date": this.state.date
        }

        this.setState({
            expense: objNewExpense
        }, async () => {
            try {
                console.log("DDD");
                //Storage.create(this.state.expense, 'expense');
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

    _setDate(event, newDate) {
        console.log(newDate)
        this.setState({ date: newDate, showDatePicker:false })
    }


    _showDatePicker() {
        let showDatePicker = this.state.showDatePicker ? false : true;
        this.setState({showDatePicker:showDatePicker})
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
                            {this.state.showDatePicker && <DateTimePicker value={this.state.date}
                                mode='date'
                                display="default"
                                onChange={this._setDate} />
                            }
                            <Text placeholder="Date" style={{width:'70%'}}>{this.state.date.toDateString()}</Text>
                            <Button block primary onPress={this._showDatePicker}>
                                <Text>Select date</Text>
                            </Button>
                        </Item>
                    </Form>
                    <Button block primary onPress={this._onpressSaveButton}>
                        <Text>Save</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}