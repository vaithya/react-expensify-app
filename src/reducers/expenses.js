const expensesReducerDefaultState = [];

// Expenses reducer

// const expensesReducer = (state = expensesReducerDefaultState, action) => {

export default (state = expensesReducerDefaultState, action) => {
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
