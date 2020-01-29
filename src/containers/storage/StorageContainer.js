import AsyncStorage from '@react-native-community/async-storage';

const create = async (objStoraged, entity) => {
    try {
        let timeInMs = Date.now();
        await AsyncStorage.setItem(entity+'@' + timeInMs, JSON.stringify(objStoraged));
        console.log(entity+'@' + timeInMs, objExpense);
    } catch (e) {
        console.log(e);
    }
}

const listAll = async (entity, callback) =>{
    AsyncStorage.getAllKeys().then(arrayKeys => {
        let arrayPromisesBudgets = arrayKeys.map(key => {
            console.log("key",key)
            let keyEntity = key.split("@")[0];
            if(keyEntity === entity){
                return AsyncStorage.getItem(key).then(object => {
                    return object
                })
            }
        })

        Promise.all(arrayPromisesBudgets).then(results => {
            
            let filteredResults = results.filter(objBudget => {
                return objBudget !== undefined;
            })
           callback(filteredResults);
        })
    });
}



export default storageContainer = {
 "create":create,
 "listAll":listAll
}