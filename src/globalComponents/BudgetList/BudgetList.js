import React, { useEffect, useCallback } from 'react';
import { Text } from 'react-native';
import BudgetCard from '../BudgetCard/BudgetCard.component';
import { useSelector, useDispatch } from 'react-redux';
import * as BudgetStorage from "../../containers/storage/budget/BudgetStorage"
import { requestAllBudgets, receiveAllBudgets } from "../../redux/actions"


const BudgetList = (props) => {
    const dispatch = useDispatch();
    const budgets = useSelector(state => state.budgets);

    useEffect(() => {
        console.log(JSON.stringify(budgets))
        BudgetStorage.teste(dispatch)
        BudgetStorage.getBudgets(dispatch)
    },[dispatch]);

    if (!budgets || budgets.length === 0) {
        return (
            <Text>Nenhum registo ainda</Text>
        );
    }

    return (
        budgets.map((budget) => {
            let storageKey = budget.key;
            let percent = 40 / budget.amount;

            return (
                <BudgetCard
                    value={budget.amount}
                    key={storageKey}
                    description={budget.description}
                    color={budget.color}
                    valueUtilized={percent}
                    navigate={props.navigation}
                />
            )
        })
    )
}

export default BudgetList;
