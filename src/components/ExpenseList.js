import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} /> )}
  </div>
);

// What information from the store dows our component wants to access
// As the store changes, this is automatically gonna rerun, getting the fresh values in the component.
// const mapStateToProps = (state) => {
//   return {
//     expenses: state.expenses,
//     filters: state.filters
//   };
// }

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

// The returning object is passed as props to wrapped component.
// const ConnectedExpenseList = connect((state) => {
// HOC
export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;
