const initialState = {
    id:null,
    show:false
}
const contextMenu =(state = initialState, action) =>{
    switch (action.type) {
        case "SHOW_MENU":
            console.log("SHOW MENU:",{...state, show:false, id:action.payload.budgetId})
            return {
                ...state,
                show:true,
                id:action.payload.budgetId,
                position:{x:action.payload.positionX, y:action.payload.positionY}
            }
        case "HIDE_MENU":
            console.log("HIDE MENU:",{...state, show:false})
            return {
                ...state,
                show:false
            }
        default:
            console.log("default:",state)
            return state;
    }
}
export default contextMenu;