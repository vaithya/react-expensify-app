'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const obj = {
//   name : 'abc',
//   getName() {
//     return this.name;
//   },
//   age: 23
// };
//
// // const getName = obj.getName;
// const getName = obj.getName.bind(obj);
//
// console.log(getName()); // 'this' is undefined.
// console.log(obj.getName()); // Context of an object. So we have binding.

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      // options: []
      options: props.options
    };

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddoption = _this.handleAddoption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log('Component did mount.');
      // Keep options array between page loads.
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {
        // Do nothing/
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('Component did update.');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('Unmounting.');
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {
      //console.log(option);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: 'handleAddoption',
    value: function handleAddoption(option) {
      // array push changes the array you called it with. array concat does not alter the original array. It adds the element and returns the new array leaving the original one unaltered.

      if (!option) {
        return 'Enter valid value to add.';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists.';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });

      //  console.log(option);
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision App';
      var subTitle = 'Put your life in the hands of a computer.';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subTitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0 ? true : false, handlePick: this.handlePick }),
        React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions, handleDeleteOption: this.handleDeleteOption }),
        React.createElement(AddOption, { handleAddoption: this.handleAddoption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

// class Header extends React.Component {
//   render() {
//   //  return <p>This is from Header</p>
//     // return (
//     //   <div>
//     //     <h1>Indecision App</h1>
//     //     <h2>Put your life in the hands of a computer</h2>
//     //   </div>
//     // );
//       return (
//         <div>
//           <h1>{this.props.title}</h1>
//           <h2>{this.props.subtitle}</h2>
//         </div>
//       );
//   }
// }

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

// Multiple components can reuse the same header component.
Header.defaultProps = {
  title: 'Indecision App'
};

// If you give onClick={this.handlePick()}, that function will be called while rendering?
// If we give reference of the function, onClick will just hold that function ref till that action happens actually.
// class Action extends React.Component {
//
// //   handlePick() {
// // //    alert('Handle pick.')
// //   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

// Convert the above class-based component to a stateless functional component which is basically render()
var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick, disabled: !props.hasOptions },
      'What should I do?'
    )
  );
};

// Nesting components
// class Options extends React.Component {
//
// // constructor always gets called with the props object
//   constructor(props) {
//     // If you don't call super(props), you won't have access to this.props
//       super(props);
//       // We will run the below line only once, when the component gets rendered first time.
//       // this.handleRemoveAll = this.handleRemoveAll.bind(this);
//   }
//
//   // handleRemoveAll() {
//   //   console.log(this.props.options);
//   //   // 'this' is null here.
//   // }
//
// // When you passed this.handleRemoveAll to onClick event, you passed a reference of the function and you broke the binding of the function with the instance of the class.
// // this.handleRemoveAll --> this.handleRemoveAll.bind(this) in the onClick event. => We need to bind everytime we re-render this instance.
// // To avoid this, we bind in the constructor.
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//         {this.props.options.map((option) => <Option key={option} optionText={option} />)}
//       </div>
//     );
//   }
// }

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add an option to get started.'
    ),
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove all'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option, handleDeleteOption: props.handleDeleteOption });
    })
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     );
//   }
// }

// If you simply call a event handler, the event object will be passed as an argument. But we want the option text, so we use an arrow function to do that.
var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      'Remove'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddoption = _this2.handleAddoption.bind(_this2);

    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddoption',
    value: function handleAddoption(e) {

      e.preventDefault();
      var option = e.target.elements.option.value.trim();

      // if(option) {
      //   alert(option);
      // }

      //    if (option) {
      var error = this.props.handleAddoption(option);
      //    }

      this.setState(function () {
        return {
          error: error // error: error
        };
      });

      if (!error) {
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddoption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);
// Custom HTML tags for React components. React expects components to start with capital letters to differentiate components from regular HTML tags.
// Lower case --> Will be interpreted as a string in React.createElement by babel.
// Capital letter --> Will be used as a reference in ""

// const jsx = (
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
//
// );

// const jsx = (
//   <div>
//     <IndecisionApp />
//   </div>
// );

// ReactDOM.render(jsx, document.getElementById('app'));

// Stateless functional components --> Components that do not track their state or do not have state, but are components. They can be changed to functions. Components that only concerned about presentation.
// Advantage: They are faster than class-based components because they do not have to extend React.Component. Overhead because it is a class.
// We can still use props. Stateless func comps do not have access to this. Props are passed as arguments here.
// Stateless functional component below:
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };
//
// ReactDOM.render(<User name='Vaithya' age={26}/>, document.getElementById('app'));
// ReactDOM.render(<IndecisionApp options={['a','b']}/>, document.getElementById('app'));


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
