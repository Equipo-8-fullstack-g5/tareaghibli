import React,{useState,useEffect} from 'react'
import {Card} from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Menu from './Menu'

const Info = () => {
        const { movieId } = useParams();
        const [datosFilm, setDatosFilm] = useState({})
        const getMovie = async (id) => {
          const url = `https://ghibliapi.herokuapp.com/films/${id}`
          const res = await axios.get(url)
          console.log('movie', res)
          setDatosFilm(res.data)
        }
        useEffect(() => {
          getMovie(movieId)
        }, [])
  return (
    <div>
        <Menu />
        <>
  <Card>
<Card.Img variant="top" src={datosFilm.movie_banner} />
    <Card.Body>
      <Card.Text>
        <h1>{datosFilm.title}</h1>
      </Card.Text>
      <Card.Text>
        <h3>{datosFilm.description}</h3>
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
        <h2>Calificacion: {datosFilm.rt_score}</h2>
      </Card.Text>
      <br />
      <Card.Text>
        <h2>Duracion: {datosFilm.running_time}</h2>
      </Card.Text>
      <br />
      <Card.Text>
        <h2>Director: {datosFilm.director}</h2>
      </Card.Text>
    </Card.Body>
  </Card>
</>


    </div>
  )
}

export default Info