import React from 'react'
import Menu from './Menu';

import { Container, Navbar , Nav, FormText, Carousel } from 'react-bootstrap';



const Home = () => {
  return (
    <div>
      <Menu />
      <div>
        <h2 className="text-center">Home</h2>
        <Container className='align-items-center'>
        <Carousel variant="dark" className='d-flex justify-content-center'>
  <Carousel.Item>
    <img
      className="d-block w-100 justify-content-center"
      src="https://assets.metablock.io/logos/react-blue.svg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 class="text-white bg-dark" >Tarea Realizada con React</h3>
      <p class="text-white bg-dark">Se extrajo información desde una API y fue plasmada en diferentes rutas</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.blogs.es/b6c95a/ghibli/1366_2000.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 class="text-white bg-dark">Studio Ghibli</h3>
      <p class="text-white bg-dark">Studio Ghibli (スタジオジブリ Sutajio Jiburi) es un estudio japonés de animación, considerado por la crítica especializada y muchos cinéfilos como uno de los mejores estudios de animación del mundo en la actualidad.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
      </div>
    
</div>
  )
}

export default Home