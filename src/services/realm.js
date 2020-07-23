import Realm from 'realm';
import Reactotron from 'reactotron-react-native'
import BudgetSchema from '../schemas/BudgetSchema';

export const teste = BudgetSchema;

export const RealmConnection = async ()=>{
    let openConnection = Realm.open({
        schema:[
            BudgetSchema
        ]
    })
    console.log("REALM CONNECTION:", openConnection)
    return openConnection;
}

export const RealmConnection2 = ()=>{
    let openConnection = Realm.open({
        schema:[
            BudgetSchema
        ]
    })
    console.log("REALM CONNECTION teste:", openConnection)
    return {connection:openConnection};
    //return "testebobob";
}

export const closeConnection = (openRealmConnection)=>{
    openRealmConnection.then(realm => {
        realm.close();
    });
}

//export default RealmConnection