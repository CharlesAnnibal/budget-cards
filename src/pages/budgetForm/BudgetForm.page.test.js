
import React from 'react'
import {mount, shallow} from 'enzyme'
import BudgetForm from './BudgetForm.page'
import { Text } from 'native-base';

describe('BudgetForm.page', () => {
    it("Testing states after Form fullfilled", ()=>{
        const BudgetFormComponent = shallow(<BudgetForm/>)
        expect(wrapper.find({ prop: 'value' })).to.have.lengthOf(1);
    })

    it("Testing states after Form with date start not filled", ()=>{
        expect(1 + 2).toBe(3);
    })

    it("Testing states after Form with nothing filled", ()=>{
        expect(1 + 2).toBe(3);
    })
})