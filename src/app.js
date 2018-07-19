import React, { Component } from 'react';
import Switch from './switch';
import './app.css';

class App extends Component {
  state = {
    on: false,
    inputValue: 'Off'
  };

  handleToggle() {
    this.setState(({ on }) => ({ on: !on, inputValue: !on ? 'On' : 'Off' }));
  }

  handleInputChange(event) {
    var { value: inputValue } = event.target;
    var setToggleState = ['on', 'off'].includes(inputValue.toLowerCase());
    this.setState(({ on }) => ({
      on: setToggleState ? /on/i.test(inputValue) : on,
      inputValue
    }));
  }

  render() {
    var { on, inputValue } = this.state;
    return (
      <div className="app">
        <h1 className="app__title">React Testing Boilerplate</h1>
        <div className="toggle">
          <Switch
            className="toggle__switch"
            on={on}
            onClick={this.handleToggle.bind(this)}
            data-testid="toggle-switch"
          />
          <label className="toggle__label">
            Toggle state:
            <input
              className="toggle__input"
              value={inputValue}
              onChange={this.handleInputChange.bind(this)}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default App;
