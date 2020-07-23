import React from 'react'
import { mount, shallow } from 'enzyme'
import BudgetCard from '.'
import store from "../../redux/store";


describe('<BudgetCard />', () => {
    const props = {
        budgets: [],
        id: 1,
        description: "Agua",
        color: "red",
        store: store,
        //showMenu: jest.fn()
    }

    const wrapper = shallow(<BudgetCard {...props} />)

    it('renders correctly, test using Jest + Enzyme', () => {
        expect(wrapper).toMatchSnapshot();
    });

})