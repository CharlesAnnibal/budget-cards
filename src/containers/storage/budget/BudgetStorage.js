import { requestAllBudgets, receiveAllBudgets } from "../../../redux/actions"
import AsyncStorage from '@react-native-community/async-storage';
const entity = "budget";

export const teste = (dispatch)=>{
    console.log("MAOEEE")
    dispatch(requestAllBudgets())
}

export const getBudgets = (dispatch) => {
    console.log("MAOEEE")
    //dispatch(requestAllBudgets())
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(
            keys,
            (err, budgets) => {
                let budgetsWithKey = budgets.map((result, i, budget) => {
                    // get at each store's key/value so you can work with it
                    let key = result[0];
                    let objectBudget = JSON.parse(result[1]);
                    objectBudget["key"] = key;
                    return objectBudget;
                });
                dispatch(receiveAllBudgets(budgetsWithKey))
            });
    });
    //dispatch(receiveAllBudgets(budgetsWithKey))
}
/*export const BudgetStorage = {
    "teste": ()=>{
        console.log("pooooo")
        return;
    },
    "getAll": (dispatch) => {
        console.log("MAOEEE")
        //dispatch(requestAllBudgets())
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(
                keys,
                (err, budgets) => {
                    let budgetsWithKey = budgets.map((result, i, budget) => {
                        // get at each store's key/value so you can work with it
                        let key = result[0];
                        let objectBudget = JSON.parse(result[1]);
                        objectBudget["key"] = key;
                        return objectBudget;
                    });
                    dispatch(receiveAllBudgets(budgetsWithKey))
                });
        });
        //dispatch(receiveAllBudgets(budgetsWithKey))
        return;
    },
    "create": (objStoraged) => {
        let timeInMs = Date.now();
        AsyncStorage.setItem(entity + '@' + timeInMs, JSON.stringify(objStoraged));
        console.log(entity + '@' + timeInMs, objStoraged);
    }
}*/
