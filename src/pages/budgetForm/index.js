import { connect } from "react-redux";
import BudgetForm from './BudgetForm.page';
import { getAllBudgets, createBudget } from "../../redux/ducks/budgets";
//import {hideMenu} from  "../../redux/ducks/contextMenu";


const mapStateToProps = state => {
    const budgets = state.budgets
    return { budgets }
}

const mapDispatchToProps = { getAllBudgets, createBudget };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BudgetForm);