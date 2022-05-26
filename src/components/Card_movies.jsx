import React, { useState, useEffect } from 'react'
import { Card } from "react-bootstrap"
import axios from 'axios'


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
      <Card className="bg-dark text-white">
    <Card.Img src={film.image} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>{film.title} </Card.Title>
      <Card.Text>
        {film.description}
      </Card.Text>
      <Card.Text>
        {film.director}
      </Card.Text>
      <Card.Text>
        {film.running_time}
      </Card.Text>
      <Card.Text>
        {film.rt_score}
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
    )
    }))
}

export default Card_movies