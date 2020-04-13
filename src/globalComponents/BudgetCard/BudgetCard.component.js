import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native'
import * as Progress from 'react-native-progress';
import { styles, identifier } from './BudgetCard.style';
import { useDispatch, useSelector } from 'react-redux';
import { showMenu, hideMenu } from "../../redux/actions";

const BudgetCard = (props) => {
  const [id, setId] = useState(props.id);
  const [amount, setAmout] = useState(50);
  const [description, setDescription] = useState(props.description);
  const [valueUtilized, setValueUtilized] = useState(0.3);
  //const [styles, setStyles] = useState(styles);
  const [colorIdentifier, setColorIdentifier] = useState(identifier(props.color));


  const dispatch = useDispatch();
  const currentstate = useSelector(state => state.contextMenu);
  console.log("ue", currentstate)
  const budgets = useSelector(state => state.budgets);
    console.log("using selector budgets:::",budgets)

  const _onPressButton = () => {
    
    dispatch(showMenu(id));
    //useDispatch(hideMenu(id));

    //this.props.navigate.navigate('NewExpense')
    //this.menuRef.current.toggleMenu()
    //this.state.showingMenu ? this.setState({ showingMenu: false }) : this.setState({ showingMenu: true })
  }

  return (
    <TouchableHighlight onPress={() => _onPressButton()} style={styles.card}>
      <View style={styles.flexbox}>
        <View style={styles.colorIdentifierRow}>
          <View style={colorIdentifier}></View>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.text}>{amount}</Text>
        </View>
        <View style={styles.progressBarRow}>
          <Progress.Bar style={{ marginTop: '4.5%', width: '100%' }} progress={valueUtilized} height={10} />
        </View>
      </View>
    </TouchableHighlight>
  );

}

export default BudgetCard;

