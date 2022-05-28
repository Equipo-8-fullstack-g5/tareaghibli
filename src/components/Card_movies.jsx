import React, { useState, useEffect } from 'react'
import { Card, Container, Col,Row } from "react-bootstrap"
import axios from 'axios'
import Menu from './Menu'
import { Link } from 'react-router-dom'


const Card_movies = () => {
const [films, setFilms] = useState ([])

  let url = "https://ghibliapi.herokuapp.com/films"

  const traerFilms = async () => {
   let datos = await axios.get (url) 
   setFilms (datos.data)
   console.log (datos)
  }
  
  useEffect(() => {
    traerFilms()
  }, [])


  return (
    <div>
      <Menu />
    <Row className='d-flex justify-content-center'>
      {
    films.map ((film,index) => {
      return (
          
          <Col key={index} lg={3} md={4} sm={6} xs={12} className="mt-3"> 
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={film.image} alt={film.title} />
          <Card.Body>
            <Card.Title>{film.title}</Card.Title>
          </Card.Body>
          <Card.Body>
          <Link to={`/${film.id}`} >
            <button className='btn btn-success'>Ver info</button>
          </Link>
          </Card.Body>
        </Card>
        </Col>
      
    )
    }) 
    }
    </Row>
    </div>
    )
}

export default Card_movies