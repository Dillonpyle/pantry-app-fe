import React, { Component } from 'react'

class IngredientsSearch extends Component {
	constructor () {
		super()

		this.state ={
			search: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log('handle submit was called');
	}

	render () {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(null)}>
					<input name='search' type='text' placeholder='Search ingredient...' value={this.state.search} onChange={this.handleChange} />
					<button type="submit">Search</button>
				</form>

			</div>


		)
	}
}


export default IngredientsSearch