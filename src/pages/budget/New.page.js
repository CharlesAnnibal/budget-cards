import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import Reactotron from 'reactotron-react-native'
import DatePicker from '../../globalComponents/DatePicker';
import { RealmConnection } from '../../services/realm'
import { useDispatch } from 'react-redux'
import {receiveAllBudgets } from '../../redux/actions'

const NewBudget = ({navigation}) => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');


    const dispatch = useDispatch();

    const saveBudget = async () => {

        RealmConnection().then(realm => {
            let maxId = parseInt(realm.objects('Budget').max('id'));
            let nextId = maxId ? maxId + 1 : 1;
            const data = {
                id: nextId,
                amount: parseFloat(amount),
                description: description,
                color: color,
                date_start: new Date(dateStart),
                date_end: new Date(dateEnd)
            }

            Reactotron.log("INSTANCIA REALM ABERTA", realm)
            realm.write(() => {
                Reactotron.log("CRIANDO BUDGET", data)
                realm.create('Budget', data);
            });

            dispatch(receiveAllBudgets(realm.objects('Budget')))
            realm.close();
        });
    }

    const _onpressSaveButton = async () => {
        try {
            saveBudget()
            navigation.goBack();
        } catch (e) {
            Reactotron.log("Erro ao tentar cadastrar")
            navigation.goBack();
        }
    }

    return (
        <Container>
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="Amount" onChangeText={(value) => setAmount(value)} />
                    </Item>
                    <Item>
                        <Input placeholder="Description" onChangeText={(value) => setDescription(value)} />
                    </Item>
                    <Item>
                        <Input placeholder="Color" onChangeText={(value) => setColor(value)} />
                    </Item>
                    <DatePicker callbackSetDate={(value) => setDateStart(value)} />
                    <DatePicker callbackSetDate={(value) => setDateEnd(value)} />
                </Form>
                <Button block primary onPress={ _onpressSaveButton} style={{ backgroundColor: '#114acf' }}>
                    <Text>Save Budget</Text>
                </Button>
            </Content>
        </Container>
    )

}

export default NewBudget
