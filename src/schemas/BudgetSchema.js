const BudgetSchema = {
    name: 'Budget',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed:true},
        amount: 'float',
        description : 'string',
        color: 'string',
        date_start : 'date',
        date_end : 'date'
    }
}

export default BudgetSchema