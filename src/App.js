import React, { Component } from 'react';
import './App.css';

class App extends Component {
  async componentDidMount() {
  }

  handleRegister = async (data) => {

    try {

      const registerResponse = await fetch('http://localhost:8000/api/v1/users', {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }

      })

      const registerParsed = await registerResponse.json()

      console.log(registerParsed)

    } catch (err) {
      console.log(err)
    }

  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const loginResponse = await fetch('http://localhost:8000/api/v1/users', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await loginResponse.json();

    console.log(parsedResponse)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={this.handleChange} />
        </label>
        <input type='Submit' />
      </form>
    );
  }
}

export default App;

