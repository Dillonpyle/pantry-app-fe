import React, { Component } from 'react';
import IngredientsSearchContainer from './IngredientsSearchContainer';
import Home from './Home';
import Register from './Register';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {
    user_id: '',
    username: ''
  }

  componentDidMount() {
    console.log('welcome to my friggen app');
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

    try {
      const loginResponse = await fetch('http://localhost:8000/api/v1/users', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!loginResponse.ok) {
        throw Error(loginResponse.statusText)
      }

      const parsedResponse = await loginResponse.json();

      if (loginResponse.ok) {
        this.props.history.push('/home')
      }
      console.log(this.state)
      console.log(parsedResponse)

    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={() => <Register handleRegister={this.handleRegister} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />
          <Route exact path='/IngredientsSearchContainer' render={() => <IngredientsSearchContainer user={this.state}/>} />
          <Route exact path='/home' render={() => <Home />} />
        </Switch>
      </main>

    );
  }
}

export default withRouter(App);

