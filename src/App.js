import React, { Component } from 'react';
import IngredientsSearchContainer from './IngredientsSearchContainer';
import Home from './Home';
import Register from './register';
import Recipes from './Recipes/Form'
import Navagation from './Navagation';
import { Route, Switch, withRouter } from 'react-router-dom';
// import img from './pantry1.jpeg'
import './App.css';
require('dotenv').config()





class App extends Component {

  state = {
    user_id: '',
    username: '',
    ing_list: [],
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault();

    const api_call = await fetch(`https://www.food2fork.com/api/search?key=5ca1788bd22d390ed0b376c833f6c8b0&q=${recipeName}&page=2`)
    console.log(recipeName)

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });

    console.log(this.state.recipes)
  }

  componentDidMount() {
    console.log('welcome to my friggen app');

  }


  handleRegister = async (e) => {
    e.preventDefault()
    try {
      const registerResponse = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(this.state),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }

      })

      const registerParsed = await registerResponse.json()

      if (registerResponse.ok) {
        this.setState({
          user_id: registerParsed.id,
          username: registerParsed.username
        });
        this.listIngredients();
        this.props.history.push('/home')
      }



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
      const loginResponse = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
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
      console.log(parsedResponse, 'this is logins response')


      if (loginResponse.ok) {
        this.setState({
          user_id: parsedResponse.id,
          username: parsedResponse.username
        });

        this.props.history.push('/home')
      }

      console.log(this.state, "this is state")
      console.log(parsedResponse, "this is parsedResponse")

    } catch (err) {
      console.log(err)
    }
  }

  listIngredients = async () => {

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/pantry`, {
        method: 'POST',
        credentials: "include",
        body: JSON.stringify({ user_id: this.state.user_id }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw Error(response.statusText)
      }

      const ingredientsList = await response.json()
      console.log(ingredientsList, 'from list ingredient, this is what im setting state to');

      this.setState({
        ing_list: ingredientsList
      })
      console.log(this.state, 'this is state from listIngerdients');
    } catch (err) {
      console.log(err, 'from listIngredients')
    }
  }

  deleteIngredient = async (e) => {
    e.preventDefault()
    console.log("deleteIngredient was called");
  }



  render() {
    return (
      <React.Fragment>
        <main>
          <Switch>
            <Route exact path='/' render={() => <Register handleRegister={this.handleRegister} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClick={this.handleClick} />} />
            <Route exact path='/ingredients' render={() => <IngredientsSearchContainer user={this.state.username} user_id={this.state.user_id} />} />
            <Route exact path='/home' render={() => <Home username={this.state.username} user_id={this.state.user_id} ing_list={this.state.ing_list} deleteIngredient={this.deleteIngredient}/>} />
            <Route exact path='/recipes' render={() => <Recipes getRecipe={this.getRecipe} recipes={this.state.recipes} user={this.state} />} />
          </Switch>
        </main>
        <footer>
          <Navagation />
        </footer>
      </React.Fragment>

    );
  }
}

export default withRouter(App);

