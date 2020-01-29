import AsyncStorage from '@react-native-community/async-storage';

const createBudget = async (objBudget) => {
    try {
        let timeInMs = Date.now();
        await AsyncStorage.setItem('budget@' + timeInMs, JSON.stringify(objBudget));
    } catch (e) {
        console.log(e);
    }
}


export default budgetStorageContainer = {
 "createBudget":createBudget
}