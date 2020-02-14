import AsyncStorage from '@react-native-community/async-storage';


export class StorageContainer {
    create = async (objStoraged, entity) => {
        try {
            let timeInMs = Date.now();
            await AsyncStorage.setItem(entity + '@' + timeInMs, JSON.stringify(objStoraged));
            console.log(entity + '@' + timeInMs, objStoraged);
        } catch (e) {
            console.log(e);
        }
    }

    teste = async()=>{
        console.log("teste");
        return await "ddddd";
    }

    getKeys = (callback) => {
        //callback("ddddssss")
        console.log("vito")
        /*try {
            keys = await AsyncStorage.getAllKeys()
        } catch (e) {
            console.log("erro",e)
        }
        let filteredKeys = keys.filter(key => {
            let keyEntity = key.split("@")[0];

            console.log("compare", keyEntity+" "+entity)
            if (keyEntity === entity) {
                return arrayKeys[keyEntity];
            }
        });*/
        console.log("aiii")
    }

    listAll = async (entity, callback) => {
        AsyncStorage.getAllKeys().then(arrayKeys => {
            console.log("arraykeyss", arrayKeys);
            let filteredKeys = arrayKeys.filter(key => {
                let keyEntity = key.split("@")[0];
                if (keyEntity === entity) {
                    return arrayKeys[keyEntity];
                }
            });
            console.log("filteredkeys", arrayKeys);
            async (arrayKeys) => {
                values = await AsyncStorage.multiGet(arrayKeys)
                console.log("ooooo", values);
                callback(values)
            }

            /*AsyncStorage.multiGet(arrayKeys).then(register =>{
                console.log("register", register)
            });*/

            //let arrayPromisesBudgets = arrayKeys.map(key => {
            /*let keyEntity = key.split("@")[0];
            if (keyEntity === entity) {
                return AsyncStorage.getItem(key).then(object => {
                    return object
                })
            }*/
            //})

            /* Promise.all(arrayPromisesBudgets).then(results => {
                 let filteredResults = results.filter(objBudget => {
                     console.log("values-----", objBudget);
                     return objBudget;
                 })
                 callback(filteredResults);
             })*/
        });
    }
}

const storageContainer = new StorageContainer();
export const storageObject = Object.freeze(storageContainer);
