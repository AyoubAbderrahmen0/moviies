import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
const MovieList = (props) => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState(0);
    const [posterUrl, setPosterUrl] = useState("");
    const [trailer, setTrailer] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addMovie =()=>{
    props.setMovies([...props.movies,
        {
            id: Math.random(),
            title: title,
            rate: rate,
            description: description,
            posterUrl: posterUrl,
            trailer: trailer,
        },
    ])
    handleClose()
  }
  const delMovie =(id)=>{
    props.setMovies(props.movies.filter(movie => movie.id!=id))
  }
  return (
    <div>
        <Button variant="primary" onClick={handleShow} style={{marginTop:"10px", marginLeft:"5px"}}>
        Add new Movie
      </Button>
    <br />
    <br />
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" >
          Title
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=>setTitle(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Description
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=>setDescription(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Rate
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=>setRate(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          posterUrl
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=>setPosterUrl(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        trailer
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=>setTrailer(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>addMovie()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    <div className="d-flex justify-content-around flex-wrap">
      {props.movies.map((movie,index)=>(
        <MovieCard key={index} info={movie} delMovie={delMovie}/>
      ))}
    </div>
    </div>
  )
}

export default MovieList
