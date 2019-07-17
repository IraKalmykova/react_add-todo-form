import React from 'react';
import './App.css';

// import users from './api/users';

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    isMarried: true,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  handleFieldChange = (event) => {
    const { name, value, checked, type } = event.target;

    this.setState({
      [name]: (type === 'checkbox') ? checked : value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Static list of todos</h1>

        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="FirstName"
            onChange={this.handleFieldChange}
          />

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
