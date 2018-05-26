import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExpenseDashboardPage from './../components/ExpenseDashboard';
import EditExpense from './../components/EditExpense';
import AddExpense from './../components/AddExpense';
import Help from './../components/Help';
import NotFound from './../components/NotFound';
import Header from './../components/Header';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
          <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpense} exact={true}/>
            <Route path="/help" component={Help} exact={true}/>
            <Route component={NotFound} />
          </Switch>
        </div>
    </BrowserRouter>
);

// const AppRouter = () => (
//     <BrowserRouter>
//       <div>
//         <Header />
//           <Switch>
//             <Route path="/" component={ExpenseDashboardPage} exact={true}/>
//             <Route path="/create" component={AddExpense} exact={true}/>
//             <Route path="/edit/:id" component={EditExpense} exact={true}/>
//             <Route path="/help" component={Help} exact={true}/>
//             <Route component={NotFound} />
//           </Switch>
//         </div>
//     </BrowserRouter>
// );

// const ExpenseDashboardPage = () => {
//     return (
//       <div>
//         This is from my dashboard component.
//       </div>
//     );
// };

// const AddExpense = () => {
//     return (
//       <div>
//         This is from my add expense component.
//       </div>
//     );
// };

// const EditExpense = () => {
//     return (
//       <div>
//         This is from my edit expense component.
//       </div>
//     );
// };

// const HelpExpense = () => {
//     return (
//       <div>
//         This is from my help expense component.
//       </div>
//     );
// };

// Clicking the anchor tag causes a full page refresh.
// const NotFoundPage = () => {
//   return (
//     <div>
//       404 - <a href="/">Go home</a>
//     </div>
//   )
// }

// To avoid browser - server communication, Link uses client side routing with event listeners.
// No full page refresh.
// const NotFoundPage = () => {
//   return (
//     <div>
//       404 - <Link to="/">Go home</Link>
//     </div>
//   )
// }

// const Header = () => (
//   <header>
//     <h1>Expensify</h1>
//     <Link to="/">Dashboard</Link>
//     <br />
//     <Link to="/create">Create Expense</Link><br />
//     <Link to="/edit">Edit Expense</Link><br />
//     <Link to="/help">Help</Link><br />
//   </header>
// );

// const Header = () => (
//   <header>
//     <h1>Expensify</h1>
//     <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br />
//     <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br />
//     <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink><br />
//     <NavLink to="/help" activeClassName="is-active">Help</NavLink><br />
//   </header>
// );

// Children of BrowserRouter can be 0 or 1. So wrap within a div.
// The second route /create will throw an error "Cannot GET/"
// Because it uses server side routing and we don't have a route set up in the server.
// const routes = (
//     <BrowserRouter>
//       <div>
//         <Route path="/" component={ExpenseDashboardPage} exact={true}/>
//         <Route path="/create" component={AddExpense} exact={true}/>
//         <Route path="/edit" component={EditExpense} exact={true}/>
//         <Route path="/help" component={HelpExpense} exact={true}/>
//         <Route component={NotFoundPage} />
//       </div>
//     </BrowserRouter>
// );

// const routes = (
//     <BrowserRouter>
//       <div>
//         <Header />
//           <Switch>
//             <Route path="/" component={ExpenseDashboardPage} exact={true}/>
//             <Route path="/create" component={AddExpense} exact={true}/>
//             <Route path="/edit" component={EditExpense} exact={true}/>
//             <Route path="/help" component={HelpExpense} exact={true}/>
//             <Route component={NotFoundPage} />
//           </Switch>
//         </div>
//     </BrowserRouter>
// );

export default AppRouter;
