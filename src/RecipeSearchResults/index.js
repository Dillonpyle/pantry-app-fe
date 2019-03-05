import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import './RecipeSearchResults.css'

const RecipeSearchResults = (results) => {
    console.log(results, 'from recipe Search')
    let recipeList = results.map((recipe) => {

        return (

            <Col key={recipe.id} className='recipe center' lg='4'>
                <h3>{recipe.title}</h3>
                <img src={recipe.image_url} alt={recipe.title} />
                <p>{recipe.description}</p>
            </Col>

        )
    })

    return (
        <Container id='recipeMainDiv' className="center">
            <Row className="center">
                {recipeList}
            </Row>
        </Container>
    )

}

export default RecipeSearchResults