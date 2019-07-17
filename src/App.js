import React from 'react';
import './App.css';

// import users from './api/users';

class App extends React.Component {
  state = {
    valuesMap: {
      firstName: '',
      lastName: '',
      isMarried: true,
    },

    errorsMap: {
      firstName: '',
      lastName: '',
      isMarried: '',
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const errorsMap = {};

    this.setState(state => {
      if (!state.firstName) {
        errorsMap.firstName = 'FirstName is required'
      }

      if (!state.lastName) {
        errorsMap.lastName = 'LastName is required';
      }

      if (Object.keys(errorsMap).length > 0) {
        return { errorsMap };
      }

      console.log(123);
    })

  };

  handleFieldChange = (event) => {
    const { name, value, checked, type } = event.target;

    this.setState({
      [name]: (type === 'checkbox') ? checked : value,
    });
  };

  render() {
    const { valuesMap, errorsMap } = this.state;

    return (
      <div className="App">
        <h1>Static list of todos</h1>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-field">
            <label>
              First name:
              <input
                type="text"
                name="firstName"
                value={valuesMap.firstName}
                placeholder="FirstName"
                onChange={this.handleFieldChange}
              />
            </label>
            {errorsMap.firstName && (
              <div className="error" style={{ color: 'red' }}>
                {errorsMap.firstName}
              </div>
            )}
          </div>

          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="LastName"
            onChange={this.handleFieldChange}
          />

          <input
            type="checkbox"
            name="isMarried"
            checked={this.state.isMarried}
            onChange={this.handleFieldChange}
          />

          <button type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default App;
