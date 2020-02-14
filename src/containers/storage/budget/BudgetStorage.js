const entity = "budget";

export const BudgetStorage = {
    "getAll": () => {
        AsyncStorage.getAllKeys().then(arrayKeys => {

            const filteredKeys = arrayKeys.filter(key => {
                let keyEntity = key.split("@")[0];
                if (keyEntity === entity) {
                    return arrayKeys[keyEntity];
                }
            });

            return async (filteredKeys) => {
                let values;
                try {
                    values = await AsyncStorage.multiGet(filteredKeys)
                } catch (e) {
                    // error reading value
                }
                return values
            }
        });
    }
}
