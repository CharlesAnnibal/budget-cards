import { getAllBudgets } from "../../ducks/budgets";
import {showMenu, hideMenu} from "../../ducks/contextMenu";
import budgetReducer from "../budgets"

describe("budget reducer", () => {
    const initialState = {
        list: []
    }

    it("test the dispatch of action showMenu, throwing the default return ", () => {
        const action = showMenu(1);
        const states = budgetReducer(initialState, action)
        console.log("MAS PQ",states)
        expect(states).toEqual({
            list:[],
        })
    })

    it("test the dispatch of action getAllBudgets, throwing the GET_ALL_BUDGETS return ", () => {
        const budgets = {
            "0": {
                "amount":150, 
                "color":"red", 
                "date_end": "2020-04-30T08:20:01.108Z", 
                "date_start": "2020-04-13T08:19:56.464Z", 
                "description": "agua", 
                "id": 1
            }
        }
        const action = getAllBudgets(budgets);
        const states = budgetReducer(initialState, action)
        console.log("MAS PQ",states)
        expect(states).toEqual({
            list:
                {
                    "0": {
                        "amount":150, 
                        "color":"red", 
                        "date_end": "2020-04-30T08:20:01.108Z", 
                        "date_start": "2020-04-13T08:19:56.464Z", 
                        "description": "agua", 
                        "id": 1
                    }
                }
            ,
        })
    })
})