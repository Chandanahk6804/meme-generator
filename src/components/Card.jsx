import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MemeCard = (props) => {
    const navigate = useNavigate()
  return (
            <Card style={{width:"18rem"}}>
              <Card.Img variant="top" src={props.url} alt={props.name} />
              <Card.Body>
                <Card.Title className="text-center">{props.name}</Card.Title>
                <Button onClick={(e)=>navigate(`/edit/${props.id}`)}>Edit</Button>
              </Card.Body>
            </Card>
  )
}

export default MemeCard