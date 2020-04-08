import React, { useState } from 'react';
import ComponentStyle from './style.js';
import {  Item, Button, Text, Icon } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';

const DatePicker = ({callbackSetDate}) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());

    const toggleDatePicker = ()=>{
        showDatePicker === true ? setShowDatePicker(false) : setShowDatePicker(true)
        console.log("toggling", showDatePicker)
    } 

    const selectDate = (event, newDate)=>{
        setShowDatePicker(Platform.OS === 'ios');
        setDate(newDate)
        callbackSetDate(newDate)
    }

    return (
        <Item>
            {showDatePicker && <DateTimePicker value={date}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={selectDate} />
            }
            <Text placeholder="Date start" style={ComponentStyle.text}>{date.toDateString()}</Text>
            <Button block primary onPress={toggleDatePicker} style={ComponentStyle.button}>
                <Icon type="FontAwesome" name="calendar" />
            </Button>

        </Item>
    );
};
export default DatePicker;
