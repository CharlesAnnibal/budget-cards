import Realm from 'realm';
import Reactotron from 'reactotron-react-native'
import BudgetSchema from '../schemas/BudgetSchema';

export const teste = BudgetSchema;

export const RealmConnection = async ()=>{
    let teste = Realm.open({
        schema:[
            BudgetSchema
        ]
    })
    return teste;
}

//export default RealmConnection