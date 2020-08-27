import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import DatePicker from '../../globalComponents/DatePicker';
import { ToastAndroid } from "react-native";

export default class BudgetForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: props.route.params.id ? props.route.params.id : null,
         amount: props.route.params.amount ? props.route.params.amount : 0,
         description: props.route.params.description ? props.route.params.description : '',
         color: props.route.params.color ? props.route.params.color : '',
         dateStart: props.route.params.date_start ? props.route.params.date_start : '',
         dateEnd: props.route.params.date_end ? props.route.params.date_end : '',
      }

      console.log("pArams:", props.route.params)

      this.setAmount = this.setAmount.bind(this);
      this.setDescription = this.setDescription.bind(this);
      this.setColor = this.setColor.bind(this);
      this.setDateStart = this.setDateStart.bind(this);
      this.setDateEnd = this.setDateEnd.bind(this);
      this._onpressSaveButton = this._onpressSaveButton.bind(this);
   }

   setAmount(value) {
      this.setState({ amount: parseFloat(value) })
   }
   setDescription(value) {
      this.setState({ description: value })
   }
   setColor(value) {
      this.setState({ color: value })
   }
   setDateStart(value) {
      this.setState({ dateStart: new Date(value) })
   }
   setDateEnd(value) {
      this.setState({ dateEnd: new Date(value) })
   }

   _onpressSaveButton() {
      console.log(this.props)
      const data = {
         id: this.props.id ? this.props.id : Math.floor(Math.random() * 100000000),
         amount: this.state.amount,
         description: this.state.description,
         color: this.state.color,
         date_start: this.state.dateStart,
         date_end: this.state.dateEnd
      }
      if (this.props.id)
         console.log("CALL EDIT BUDGET")
      else
         this.props.createBudget(data)

      this.props.navigation.goBack();
   }

   render() {
      return (
         <Container>
            <Content>
               <Form>
                  <Item>
                     <Input 
                        key="amount" 
                        placeholder="Amount" 
                        value={this.state.amount.toString()}  
                        keyboardType="decimal-pad" 
                        onChangeText={(value) => this.setAmount(value)} />
                  </Item>
                  <Item>
                     <Input 
                        key="description" 
                        value={this.state.description}  
                        placeholder="Description" 
                        onChangeText={(value) => this.setDescription(value)} />
                  </Item>
                  <Item>
                     <Input 
                        key="color" 
                        value={this.state.color}  
                        placeholder="Color" 
                        onChangeText={(value) => this.setColor(value)} />
                  </Item>
                  <DatePicker value={this.state.dateEnd} key="date_start" callbackSetDate={(value) => this.setDateStart(value)} />
                  <DatePicker key="date_end" callbackSetDate={(value) => this.setDateEnd(value)} />
               </Form>
               <Button key="save_budget" block primary onPress={this._onpressSaveButton} style={{ backgroundColor: '#114acf' }}>
                  <Text>Save Budget</Text>
               </Button>
            </Content>
         </Container>
      )
   }
}