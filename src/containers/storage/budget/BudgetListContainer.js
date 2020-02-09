import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import BudgetList from './BudgetList'

export default class BudgetListContainer extends Component{
    constructor(){
        super();
        
        this.state = {
            budgets:[]
        }
    }

    componentDidMount() {
        AsyncStorage.getAllKeys().then(arrayKeys => {
            let filteredKeys = arrayKeys.filter(key => {
                let keyEntity = key.split("@")[0];
                if (keyEntity === "budget") {
                    return key;
                }
            });

            console.log("filtered keys", filteredKeys)
            AsyncStorage.multiGet(filteredKeys).then(keyAndObject =>{
                this.setState({budgets:keyAndObject})
            })
        });
    }

    render(){
        return <BudgetList budgets={this.state.budgets} />;
    }
}