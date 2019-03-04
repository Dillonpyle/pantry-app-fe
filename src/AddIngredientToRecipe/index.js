import React, { Component } from 'react'

class AddIngredientToRecipe extends Component {
	constructor () {
		super()

		this.state = {
			amount: '',
			unit: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render () {
		console.log(this.props);
		return (
			<div>
				<div className="left">
					{this.props.results.ing_name}: {this.props.results.ing_type}
				</div>
				<form onSubmit={this.props.addIngredient.bind(null, this.state.amount, this.state.unit)}>
					<input name="amount" placeholder="Ingredient amount..." value={this.state.title} onChange={this.handleChange}/>
					<input name="unit" placeholder="Ingredient unit..." value={this.state.image_url} onChange={this.handleChange}/>
					<button type="submit">Add Ingredient to Recipe</button>
				</form>




			</div>
		)
	}
	
}

export default AddIngredientToRecipe