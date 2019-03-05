import React from 'react';
import './recipe.css';
import { Container, Row, Col } from 'reactstrap';



const Form = ({ getRecipe, recipes }) => {
    let Recipes = recipes.map((recipe, i) => {
        return (<Col key={i} lg='4' md='4' style={{ marginBottom: '2rem' }}>
            <div className='recipesBox'>
                <img className="recipeBoxImg" src={recipe.image_url} alt={recipe.title} />
                <div className='recipeText'>
                    <h5 className='recipesTitle'>
                        {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
                    </h5>
                    <p className='recipesSubtitle'>Publisher <span>
                        {recipe.publisher}
                    </span></p>
                    <button className='recipeButtons'> <a href={recipe.source_url} target="_blank" >source link</a></button>
                </div>

            </div>


        </Col>)
    })
    return (
        <React.Fragment>
            <div className="main-container">
                <h3>Search for a recipe online!</h3>
                <form onSubmit={getRecipe} style={{ marginBottom: '2rem' }}>
                    <input className="formInput" type="text" name="recipeName" placeholder="Search recipes" />
                    <button className='formButton'>search</button>
                </form>
            </div>
            <Container>
                <Row>
                    {Recipes}
                </Row>
            </Container>
        </React.Fragment>
    )
}



export default Form