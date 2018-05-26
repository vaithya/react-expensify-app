import { createStore } from 'redux';

// Action generators are functions that return action objects
// Instead of directly passing action objects to dispatch method.

// Store tracks changing data over time.
// Passing default state value

// Destructuring
const add = ({ a, b }, c) => {
  return a + b + c;
};

console.log(add({a: 1, b: 12}, 100));

// Destructuring
const incrementCount = ( { incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    // incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// This function is called a reducer.
// How the state changes in response to the action.
// Criteria for a reducer: 
// 1. Reducers are pure functions. (Pure function: Output is only determined by the input)
// 2. Never change state or action directly. Return a new object always based on state and action values.

// let a = 10;
// const add = (b) => { // Not a pure function
//   return a + b;
// }

// let a = 10;
// let result;
// const add = (a, b) => {
//   result = a + b; // Interacts with variables outside its scope. Not a pure function.
// }

// Reducers

const countReducer = (state = { count: 0 }, action) => {
  console.log('Running.');

  switch (action.type) {

    case 'INCREMENT':
//        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
//          count: state.count + incrementBy
            count: state.count + action.incrementBy
        };
    case 'DECREMENT':
//        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
//          count: state.count - decrementBy
            count: state.count - action.decrementBy
        };
    case 'RESET':
        return {
          count: 0
        };
    case 'SET':
        return {
          count: action.count
        };
    default:
        return state;
  }
  // if (action.type === 'INCREMENT') {
  //     return {
  //       count: state.count + 1
  //     }
  // } else {
  //   return state;
  // }
};

// const store = createStore((state = { count: 0 }, action) => {
//   console.log('Running.');
//
//   switch (action.type) {
//
//     case 'INCREMENT':
// //        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
//         return {
// //          count: state.count + incrementBy
//             count: state.count + action.incrementBy
//         };
//     case 'DECREMENT':
// //        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
//         return {
// //          count: state.count - decrementBy
//             count: state.count - action.decrementBy
//         };
//     case 'RESET':
//         return {
//           count: 0
//         };
//     case 'SET':
//         return {
//           count: action.count
//         };
//     default:
//         return state;
//   }
//   // if (action.type === 'INCREMENT') {
//   //     return {
//   //       count: state.count + 1
//   //     }
//   // } else {
//   //   return state;
//   // }
// });

const store = createStore(countReducer);

// Similar this.setState((prevState) => {
// return prevState;
// })

// This is a redux state container.
// Get the current state.
// console.log(store.getState());

// Called every time the store changes.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})
// Actions - An object that gets sent to the store.
// Actions are our ways of communicating with the store.
// We send the actions to the store using dispatch method.

store.dispatch({
  type: 'INCREMENT', //Convention in redux to use all caps for actions, underscore to separate words
  incrementBy: 5
});

unsubscribe();

// If you manually pass action objects in many places, typos are difficult to correct
// You won't know where you made a mistake.

store.dispatch(incrementCount());

// store.dispatch({
//   type: 'INCREMENT' //Convention in redux to use all caps for actions, underscore to separate words
// });

store.dispatch(incrementCount({incrementBy: 5}));

// console.log(store.getState());

// store.dispatch({
//   type: 'DECREMENT' //Convention in redux to use all caps for actions, underscore to separate words
// });

store.dispatch(decrementCount());

// console.log(store.getState());

// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(resetCount());

// console.log(store.getState());

// store.dispatch({
//   type: 'SET',
//   count: 101
// });

store.dispatch(setCount({count: 101}));
