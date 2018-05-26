import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

// Controlled input -  value is controlled by javascript
const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        } else if (e.target.value === 'amount') {
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
);

// export default ExpenseListFilters;

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

// If you don't pass any props, you'll just have access to dispatch method.
// Go to React tab in developer tools and see <Connect> tags. You'll see that we have
// dispatch() in the props of every <Connect> component.
export default connect(mapStateToProps)(ExpenseListFilters);
