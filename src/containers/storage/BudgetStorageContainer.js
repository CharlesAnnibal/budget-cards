import AsyncStorage from '@react-native-community/async-storage';
import { StorageContainer} from './StorageContainer';


export class BudgetStorageContainer extends StorageContainer{
    constructor(){
       super();
       this.entity = "budget";
    // this.getKeys = this.getKeys.bind(this);
    }


    create = async (objStoraged) => {
        console.log("entityyy",this.entity)
        super.create(objStoraged, this.entity)
    }

    getKeys = (thecallback) => {
        thecallback("owww"+this.entity)
        //console.log("entssssittttty",this.entity)
        //super.getKeys(thecallback)
         //return await super.getKeys(this.entity)
    }

    listAll = async (callback) => {
        super.create(this.entity, callback)
    }
}

const storageContainer = new BudgetStorageContainer();
export const budgetClassObject = Object.freeze(storageContainer);