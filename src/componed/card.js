import { getDefaultNormalizer } from '@testing-library/dom';
import React, {useState,useEffect}from 'react'
import {Card,ListGroup,ListGroupItem,Button,Images} from 'react-bootstrap'


function Book () {
  const [film, setfilm] = useState([])
  const getfilm = ()=>{
    
    fetch('film.json').then(
          response => response.json()).then 
                   (film => setfilm(film));
  }
  
  useEffect(()=> {getfilm()
  },[])


  return(
    
      film.map(el=>
      <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.Images} />
            <Card.Body>
                <Card.Title> {el.Title} </Card.Title>
                <Card.Text> {el.Awards} </Card.Text>
                <Button variant="primary"> {el.imdbID}  </Button>
            </Card.Body>
            </Card>
     </div> 
      )
  
   )

 }

export default Book