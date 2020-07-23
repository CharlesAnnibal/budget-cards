import React, { Component } from 'react';
import { Text } from 'react-native';
import BudgetCard from '../BudgetCard/index';


export default class BudgetList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            budgets: props.budgets
        }
    }


    render() {
        console.log("render::::",this.props)
        if (this.props.budgets && this.props.budgets.list.length > 0) {
            return (
                this.props.budgets.list.map((budget) => {
                    console.log(budget)
                    let percent = 40 / budget.amount;

                    return (
                        <BudgetCard
                            amount={budget.amount}
                            key={budget.id}
                            id={budget.id}
                            description={budget.description}
                            color={budget.color}
                            valueUtilized={percent}
                            budgetListRef={this.props.reference}
                        />
                    )
                })
            )
        } else {
            console.log("e o q:",this.state.budgets)
            return (<Text>Nenhum </Text>);
        }
    }
}

