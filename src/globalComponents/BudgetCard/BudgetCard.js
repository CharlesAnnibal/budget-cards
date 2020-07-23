import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native'
import * as Progress from 'react-native-progress';
import { styles, identifier } from './style';

export default class BudgetCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 50,
            valueUtilized: 0.3,
            colorIdentifier: identifier(props.color)
        }

        this.pressButton = this.pressButton.bind(this);
    }

    pressButton(event) {
        console.log(event.nativeEvent.pageX)
        this.props.showMenu(
            {
                id: this.props.id,
                positionX: event.nativeEvent.pageX,
                positionY: event.nativeEvent.pageY
            }
        )
    }

    render() {
        return (
            <TouchableHighlight
                onPress={(event) => this.pressButton(event)}
                underlayColor="#e6f1f7"
                style={styles.card}
            >

                <View style={styles.flexbox}>
                    <View style={styles.colorIdentifierRow}>
                        <View style={this.state.colorIdentifier}></View>
                    </View>
                    <View style={styles.textRow}>
                        <Text style={styles.text}>{this.props.description}</Text>
                        <Text style={styles.text}>{this.props.amount}</Text>
                    </View>
                    <View style={styles.progressBarRow}>
                        <Progress.Bar style={{ marginTop: '4.5%', width: '100%' }} progress={this.props.valueUtilized} height={10} />
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}