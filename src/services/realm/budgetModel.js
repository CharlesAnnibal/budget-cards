
export const getBudgets = (realmConnection)=>{
    console.log("realmConnection", realmConnection)
    return realmConnection.then(realm => {
        let budgets = realm.objects('Budget')
        return budgets;
    });
}

export const create = (realmConnection, budgetObject)=>{
    return realmConnection.then(realm =>{
        realm.write(() => {
            realm.create('Budget', budgetObject);
        });
    })
}
