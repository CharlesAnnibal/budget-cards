import AsyncStorage from '@react-native-community/async-storage';

const createExpense = async (objExpense) => {
    try {
        let timeInMs = Date.now();
        await AsyncStorage.setItem('expense@' + timeInMs, JSON.stringify(objExpense));
        console.log('expense@' + timeInMs, objExpense);
    } catch (e) {
        console.log(e);
    }
}


export default expenseStorageContainer = {
 "createExpense":createExpense
}