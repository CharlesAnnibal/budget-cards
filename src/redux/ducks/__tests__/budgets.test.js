import * as budgetsDuck from '../budgets'

describe('actions', () => {
    it('Testing getAllBudgets action', ()=>{
        const expectedAction = {
            type: budgetsDuck.GET_ALL_BUDGETS
        }
        expect(budgetsDuck.getAllBudgets()).toEqual(expectedAction)
    })

    it('Testing listBudgets action', () => {
        const budget = [

        ]
        const expectedAction = {
            type: budgetsDuck.LIST_BUDGETS,
            payload: {
                budgets: budget
            }
        }
        expect(budgetsDuck.listBudgets(budget)).toEqual(expectedAction)
    })

    it('Testing createBudget action', () => {
        const budget = {
            id:123456,
            amount: 10,
            description: "",
            color: "",
            dateStart: null,
            dateEnd: null,
        }
        const expectedAction = {
            type: budgetsDuck.CREATE_BUDGET,
            payload: {
                budget: budget
            }
        }
        expect(budgetsDuck.createBudget(budget)).toEqual(expectedAction)
    })

    
})