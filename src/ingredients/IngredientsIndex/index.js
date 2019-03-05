import React from 'react'
import './ingredientsIndex.css'
import { Container, Row, Col } from 'reactstrap';

const ingredientsIndex = ing_list => {
    let ingList = ing_list.ing_list.map((ingredient) => {
        return (
            <Col key={ingredient.id} className='ingredient' lg='4'> {ingredient.name}  </Col>
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
