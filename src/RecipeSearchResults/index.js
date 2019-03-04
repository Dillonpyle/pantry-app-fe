import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import RecipeShow from '../RecipeShow'

const RecipeSearchResults = (props) => {
    console.log(props, 'from recipe Search')
    let recipeList = props.results.map((recipe) => {
    		
        return (

            <Col key={recipe.id} className='recipe' lg='4'> 
            	<h3>{recipe.title}</h3>
            	<img src={recipe.image_url} alt={recipe.title} />
            	<p>{recipe.description}</p>
            </Col>

        )
    })

    return (
        <Container id='recipeMainDiv'>
            <Row>
                {recipeList}
            </Row>
        </Container>
    )

}

export default RecipeSearchResults