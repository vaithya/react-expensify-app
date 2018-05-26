// Higher order component (HOC)

// HOC is a react component that renders another higher_order_component
// The component that is rendered by a HOC is a regular component.

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

// We use HOC to reuse code.
// Suppose we want to display a message in several components.
// Advantages:
// Render hijacking
// Prop manipulation
// Abstract state

// HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
      <div>
        {props.isAdmin && <p>This is private info. Do not share.</p>}
        <WrappedComponent {...props}/>
      </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
      <div>
        {props.isAuthenticated ? ( <WrappedComponent {...props} />) : (<p>Please login to view. </p>) }
      </div>

    );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<Info info="These are the details" />, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));
