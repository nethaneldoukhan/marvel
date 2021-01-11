import React, { useState, useEffect } from "react"
import { Modal, Button, Card, Row, Col, Form, FormControl } from "react-bootstrap";

import './fullScreenCard.css'




function FullScreenCard({fullscreencard, onHide, show}) {

  const [favorites, setFavorites] = useState([])
  const [inFavorites, setInFavorites] = useState()

  useEffect(() => {
    const getFavorites = localStorage.getItem('marvel-favorites')
    if (getFavorites) {
      setFavorites(JSON.parse(getFavorites))
    }
    checkInFavorites()
  }, [])

  const checkInFavorites = () => {
    // const fff = favorites.filter((card) => {
    //   return card.id === fullscreencard.id
    // })
    console.log('hi')
    return 'hi'
  }

  const handleCheckFavorite = (event) => {
    console.log(event.target.checked)
    if (event.target.checked) {
      let getFavorites = favorites
      getFavorites.push(fullscreencard)
      setFavorites(getFavorites)
      localStorage.setItem('marvel-favorites', JSON.stringify(favorites))
    }
    console.log(favorites)
  }

  console.log(favorites)

  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Full screen
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="fullscreen-body">
          <Row>
              <Col xs={3}>
          <figure>
              <Card.Img src={`${fullscreencard.thumbnail.path}.${fullscreencard.thumbnail.extension}`} alt={fullscreencard.name} />
          </figure>
          </Col>
          <Col xs={9}>
              <Card.Title>
                  {fullscreencard.name}
              </Card.Title>
              </Col>
          </Row>

          <Form className="row form-save-favorites">
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="Save this comics to your favorites"
              // defaultChecked={inFavorites}
              onChange={handleCheckFavorite}
            />
            <input type="text"
              defaultValue={checkInFavorites}
            />
          </Form>

          <Card.Text>
              {fullscreencard.description}
          </Card.Text>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Form inline>
          <FormControl type="text" placeholder="Add comment" className="mr-sm-2" />
          <Button variant="light">Save</Button>
        </Form>
      </Modal.Footer>
    </Modal>
  );
}

  

  
export default FullScreenCard