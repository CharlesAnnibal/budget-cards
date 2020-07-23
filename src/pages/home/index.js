import { connect } from "react-redux";
import Home from './Home.page';
import { getAllBudgets } from "../../redux/ducks/budgets";
import {hideMenu} from  "../../redux/ducks/contextMenu";


const mapStateToProps = state => {
    const budgets = state.budgets
    return { budgets }
}

const mapDispatchToProps = { getAllBudgets, hideMenu };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);