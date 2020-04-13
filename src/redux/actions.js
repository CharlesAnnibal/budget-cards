export const getAllBudgets = (content) =>{
  console.log("acton getAllBudgets  ", content)
  return{
    type:"GET_ALL_BUDGETS",
    payload:{
      budgets:content
    }
  }
}

export const showMenu = (id) =>{
  return{
    type:"SHOW_MENU",
    payload:{
      budgetId:id
    }
  }
}

export const hideMenu = (clickedCard) =>{
  return{
    type:"HIDE_MENU"
  }
}