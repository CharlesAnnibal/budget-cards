import React, { Component, createRef } from 'react';
import { Text } from 'react-native';
import BudgetCard from '../BudgetCard/index';
import {View } from 'native-base';
import { ToastAndroid } from "react-native";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


export default class BudgetList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            budgets: props.budgets,
            menuActive: false,
            budgetSelected: {},
        }


        this.bottomMenuElement = null
        this.setBottomMenuElement = element => {
            this.bottomMenuElement = element;
        }
        this.bottomMenuCallBack = this.bottomMenuCallBack.bind(this)

        this._menu = null;

        this.setMenuRef = ref => {
            this._menu = ref;
        };

        this.hideMenu = () => {
            this._menu.hide();
        };

        this.editBudgetOption = ()=>{
            this._menu.hide();
            console.log("edit budget",this.state.budgetSelected)
            props.navigation('Budget/edit', this.state.budgetSelected)
        }

        this.showMenu = () => {
            this._menu.show();
        };
    }

    bottomMenuCallBack(budgetCardProps) {
        this.setState({ menuActive: !this.state.menuActive })
        this.setState({ budgetSelected: budgetCardProps })
        this.showMenu()
    }

    render() {
        console.log("render::::", this.bottomMenuRef)
        if (this.props.budgets && this.props.budgets.list.length > 0) {
            return (
                <>
                    {
                        this.props.budgets.list.map((budget) => {
                            
                            let percent = budget.amount * 40 / 100 ;
                            percent = 0.4;
                            console.log(40, budget.amount, percent)

                            return (
                                <BudgetCard
                                    amount={budget.amount}
                                    key={budget.id}
                                    id={budget.id}
                                    description={budget.description}
                                    color={budget.color}
                                    budget={budget}
                                    valueUtilized={percent}
                                    onPressCallback={this.bottomMenuCallBack}
                                />
                            )
                        })
                    }
                    <View style={{position:'absolute',bottom:0, left:5, width:'100%'}}>
                        <Menu
                            style={{ width: '100%', marginLeft:'2%' }}
                            ref={this.setMenuRef}
                        >
                            <MenuItem style={{ maxWidth: '100%' }}>{this.state.budgetSelected.description}</MenuItem>
                            <MenuItem style={{ maxWidth: '100%' }} onPress={this.editBudgetOption}>Edit budget</MenuItem>
                            <MenuItem  style={{ maxWidth: 'auto' }} onPress={this.hideMenu}>Register expense from this budget</MenuItem>
                            <MenuDivider />
                            <MenuItem onPress={this.hideMenu}>Delete budget</MenuItem>
                        </Menu>
                    </View>
                    
                </>
            )
        } else {
            return (<Text>Nenhum </Text>);
        }
    }
}

