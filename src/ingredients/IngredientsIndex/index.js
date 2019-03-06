import React from 'react'
import './ingredientsIndex.css'
import { Container, Row, Col } from 'reactstrap';

const ingredientsIndex = ({ ing_list, deleteIngredient, user_id }) => {

    let ingList = ing_list.map((ingredient) => {
        return (
            <Col key={ingredient.id} className='ingredient' lg='4'> {ingredient.name} <h2 className='ingredientDelete' onClick={deleteIngredient.bind(null, ingredient.id)}>X</h2></Col>
        )
    })


    return (
        <Container id='ingredientMainDiv'>
            <Row>
                {ingList}
            </Row>
        </Container>
    )

}

export default ingredientsIndex

