import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem =  ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {dispatch(removeExpense({ id }))}}>Remove Expense</button>
  </div>
);

// We'll have access to the dispatch prop.
export default connect()(ExpenseListItem);
