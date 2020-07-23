
export const getBudgets = (realmConnection)=>{
    console.log("realmConnection", realmConnection)
    return realmConnection.then(realm => {
        let budgets = realm.objects('Budget')
        return budgets;
    });
}