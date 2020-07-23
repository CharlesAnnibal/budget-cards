import { connect } from 'react-redux';
import { showMenu } from "../../redux/ducks/contextMenu";

import BudgetCard from './BudgetCard'
export default connect(null, {showMenu})(BudgetCard);




