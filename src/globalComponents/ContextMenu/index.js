import React from 'react';
import { Text, View } from 'react-native';
import { connect } from "react-redux";
import {stylizeContextMenu} from './style.js';

const ContextMenu = ({ contextMenu }) => {
  if (contextMenu.show) {
    let style = stylizeContextMenu(contextMenu.position)
    return (
      <View style={style.menu}>
        <Text>Mostrando {contextMenu.id}</Text>
        <View >
          <View><Text>New expense</Text></View>
          <View><Text>Edit this Budget</Text></View>
          <View><Text>Delete this Budget</Text></View>
        </View>
      </View>

    )
  } else {
    return (<View><Text>Mostrando nada</Text></View>)
  }
};

const mapStateToProps = state => {
  const contextMenu = state.contextMenu
  return { contextMenu }
}

export default connect(mapStateToProps)(ContextMenu);


