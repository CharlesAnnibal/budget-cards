import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';

export default class NewBudget extends Component {
    constructor() {
        super();

        this.state = {
            amount:"",
            description:"",
            color:"",
            dateStart:"",
            dateEnd:""
        }
    }

    static navigationOptions = {
        title: 'New budget',
    };


    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item>
                        <Input placeholder="Amount" />
                        </Item>
                        <Item>
                        <Input placeholder="Description" />
                        </Item>
                        <Item>
                        <Input placeholder="Color" />
                        </Item>
                        <Item>
                        <Input placeholder="Date of start" />
                        </Item>
                        <Item last>
                        <Input placeholder="Date of end" />
                        </Item>
                    </Form>
                    <Button block primary>
                        <Text>Save Budget</Text>
                    </Button>
                </Content>
            </Container>    
        )
    }
}