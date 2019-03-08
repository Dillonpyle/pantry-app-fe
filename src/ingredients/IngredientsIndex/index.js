import React from 'react'
import './ingredientsIndex.css'
import { Container, Row, Col } from 'reactstrap';

const ingredientsIndex = ({ ing_list, deleteIngredient, user_id }) => {

    let ingList = ing_list.map((ingredient) => {
        return (
            <Col key={ingredient.id} className='ingredient' lg='4'> {ingredient.name} <i onClick={deleteIngredient.bind(null, ingredient.id)} className="fa fa-trash-o icon" aria-hidden="true"></i></Col>
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

