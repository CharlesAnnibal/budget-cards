import React, { Component } from 'react';
import { Text } from 'react-native';
import BudgetCard from '../../../components/BudgetCard.component';


export default class BudgetListContainer extends Component{
    constructor(){
        super();
        
        this.state = {
            budgets:[]
        }
    }

    render(){
        console.log("aaaaaa",this.props.budgets)
        const listBudgetCards = this.props.budgets.map((keyAndObject) => {
            let storageKey = keyAndObject[0];
            let objBudget = JSON.parse(keyAndObject[1]);
            objBudget.amount = isNaN(objBudget.amount) ? parseFloat(objBudget.amount) : objBudget.amount
            let percent = 40 / objBudget.amount;

            return (
                <BudgetCard
                    value={objBudget.amount}
                    key={storageKey}
                    description={objBudget.description}
                    color={objBudget.color}
                    valueUtilized={percent}
                    navigate={this.props.navigation}
                />
            )
        });

        return (
            
            
                listBudgetCards.length === 0 ? (
                    <Text>Nenhum registo ainda</Text>
                ) : (listBudgetCards)
        )
        
        

    }
}