import 'react-native';
import React from 'react';
import NewBudget from '../../../src/pages/budget/New.page';
import store from "../../../src/redux/store";
import { Provider } from "react-redux";

import renderer from 'react-test-renderer';


it('renders correctly', () => {
//const wrapper = () => <Provider><NewBudget/></Provider>
  const newBudgetComponent = renderer.create(<Provider store={store}><NewBudget/></Provider>).toJSON();
  expect(newBudgetComponent).toMatchSnapshot();
});

it('renders new Budget screen correctly, with an empty form', () => {
    //const wrapper = () => <Provider><NewBudget/></Provider>
    const newBudgetComponent = renderer.create(<Provider store={store}><NewBudget amount={55} /></Provider>).toJSON();
    expect(newBudgetComponent).toMatchSnapshot();
});
