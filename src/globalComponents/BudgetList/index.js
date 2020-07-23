import { connect } from 'react-redux';
import BudgetList from './BudgetList';




const mapStateToProps = state => {
    console.log("/////",state)
    const budgets = state.budgets
    return {budgets}
}

export default connect(mapStateToProps, null)(BudgetList);