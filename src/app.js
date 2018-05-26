import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Named exports
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import './styles/styles.scss';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Electricity bill', createdAt: 2000}));
store.dispatch(addExpense({ description: 'Water bill', amount: 45 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1045, createdAt: 1000 }));
//store.subscribe(() => {
  console.log(store.getState());
//});

// store.dispatch(setTextFilter('electricity'));
// const state = store.getState();

// When you connect a component to the redux store, it becomes reactive.
// As the store changes, your component is gonna get re-rendered with the new state values.
// setTimeout(() => {
//   store.dispatch(setTextFilter('rent'));
// }, 3000);

// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log('VISIBLE EXPENSES', visibleExpenses);

const jsx = (
//  <AppRouter />
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// ReactDOM.render(routes, document.getElementById('app'));
// ReactDOM.render(<AppRouter />, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));
