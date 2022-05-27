import React, { useState, useEffect } from 'react'
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap"
import axios from 'axios'
import Menu from './Menu'


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
    films.map ((film) => {
      return (
        
        <Container>
          <Menu />
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={film.image} alt={film.title} />
          <Card.Body>
            <Card.Title>{film.title}</Card.Title>
            <Card.Text>
            {film.description}
           </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem><h5>Director: {film.director}</h5></ListGroupItem>
            <ListGroupItem><h5>Duracion: {film.running_time}</h5></ListGroupItem>
            <ListGroupItem><h5>Calificacion: {film.rt_score}</h5></ListGroupItem>
          </ListGroup>
          <Card.Body>
            <button className='btn btn-success'>Ver info</button>
          </Card.Body>
        </Card>

        </Container>
        
      
    )
    }))
}

export default Card_movies