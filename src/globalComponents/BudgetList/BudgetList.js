import React, { useEffect, useCallback, useState } from 'react';
import { Text } from 'react-native';
import BudgetCard from '../BudgetCard/BudgetCard.component';
import { useSelector, useDispatch } from 'react-redux';
import { RealmConnection } from '../../services/realm'
import { getAllBudgets } from "../../redux/actions"


const BudgetList = (props) => {
    const dispatch = useDispatch();
    const budgets = useSelector(state => state.budgets);
    console.log("using selector:",budgets)
    

    //const allStates = useSelector(state => state);
    const [budgetList, setBudgetList] = useState([])
    const loadBudgets = async () => {
        RealmConnection().then(realm => {
            dispatch(getAllBudgets(realm.objects('Budget')))
            //setBudgetList(realm.objects('Budget'))
            console.log("setou budgetslist", realm.objects('Budget'));
            realm.close();
        });
    }

    

    useEffect(() => {

        loadBudgets();
    },[dispatch, budgets.budgetList.length]);

    console.log("budgets store", budgets.budgetList)
    console.log("budgets store", budgets.budgetList.length)
    if (budgets.budgetList.length === 0) {
        return (
            <Text>Nenhum registo ainda</Text>
        );
    }


    return (
        budgets.budgetList.map((budget) => {
            console.log("oww",budget)
            let percent = 40 / budget.amount;

            return (
                <BudgetCard
                    value={budget.amount}
                    key={budget.id}
                    id={budget.id}
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
