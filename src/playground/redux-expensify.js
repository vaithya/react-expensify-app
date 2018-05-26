import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Instead of having a single huge function as a reducer, split it out and combine the reducers.

// ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE
// SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE
// Handling all above actions in a single reducer is very tough.

const demoState = {
  expenses: [{ // A reducer that just handles expenses.
    id: 'abcd',
    description: 'Rent',
    note: '',
    amount: 123,
    createdAt: 0
  }],
  filters: { // A reducer that just handles filters
    text: 'rent',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

// Unix epoch - Jan 1 1970 midnight.
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
};

const expensesReducerDefaultState = [];

// Expenses reducer

const expensesReducer = (state = expensesReducerDefaultState, action) => {

  switch (action.type) {
    case 'ADD_EXPENSE':
    // state.push(action.expense) --> Changes the state itself. We don't wanna do that.
    // return state.concat(action.expense);
        return [
          ...state,
          action.expense
        ];
    case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
        return state.map((expense) => {
          if (expense.id === action.id) {
            return {
              ...expense,
              ...action.updates
            }
          } else {
            return expense;
          }
        });
    default:
       return state;
  }

};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

// Filters Reducer

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// const store = createStore(expensesReducer);

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log('Store Change Identified.')
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//  console.log(store.getState());
  console.log('Visible Expenses', visibleExpenses);
});

// This action is gonna get dispatched to both reducers.
// Add case for that particular reducer alone.
const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 100,
  createdAt: 1000
}));

// Returns the action object.
const expenseTwo = store.dispatch(addExpense({
  description: 'Coffee',
  amount: 100,
  createdAt: -1000
}));

// console.log(expenseOne);

// console.log(store.getState());

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
//
// store.dispatch(setTextFilter('rent'));
//
// store.dispatch(setTextFilter('offee'));
//
// store.dispatch(sortByAmount());
//
 store.dispatch(sortByDate());
//
 // store.dispatch(setStartDate(125));
//
// store.dispatch(setEndDate(100));

// const user = {
//   name: 'abc',
//   age: 24
// };
//
// console.log(user);
//
// const userOne = {
//   ...user,
//   location: 'Chennai',
//   age: 27 // Overrides 24, Whichever is assigned last.
// };
//
// console.log(userOne);
