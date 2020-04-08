import { createStore } from "redux";
import rootReducer from "./reducers/root.reducer";

/*function reducerTeste(){
    return [
            {
                nome:"teste1",
                "amount":"100"
            },
            {
                nome:"teste2",
                "amount":"100"
            },
            {
                nome:"teste3",
                "amount":"100"
            },
     
    ]
}*/
const store = createStore(rootReducer);
export default store;