import React, { useState, useEffect, useRef } from "react"
import { Modal, Card, Row, Col, Form } from "react-bootstrap"

import Comments from './comments/comments'

import './fullScreenCard.css'




function FullScreenCard({fullscreencard, onHide, show}) {

  const [marvelStorage, setMarvelStorage] = useState({})
  const [favorites, setFavorites] = useState([])
  const mySwitch = useRef()

  useEffect(() => {
    const marvelStorageJson = localStorage.getItem('marvel')
    if (marvelStorageJson) {
      const marvelStorage = JSON.parse(marvelStorageJson)
      setMarvelStorage(marvelStorage)
       if (marvelStorage.favorites) {
        setFavorites(marvelStorage.favorites)
        }
    }
  }, []);

  function checkInFavorites() {
    const inFav = favorites.filter((card) => {
      return card.id === fullscreencard.id
    })
    if (inFav[0]) {
      mySwitch.current.checked = true
    }
  }

  const handleCheckFavorite = (event) => {
    console.log(event.target.checked)
    let getFavorites = []
    if (event.target.checked) {
      getFavorites = favorites
      getFavorites.push(fullscreencard)
    } else {
      getFavorites = favorites.filter((card) => {
        return card.id !== fullscreencard.id
      })
    }
    setFavorites(getFavorites)
    let marvel = marvelStorage
    marvel.favorites = getFavorites
    setMarvelStorage(marvel)
    localStorage.setItem('marvel', JSON.stringify(marvel))
    console.log(marvel)
  }

  checkInFavorites()

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
              ref={mySwitch}
              type="switch"
              id="custom-switch"
              label="Save this comics to your favorites"
              onChange={handleCheckFavorite}
            />
          </Form>

          <Card.Text>
              {fullscreencard.description}
          </Card.Text>
      </div>
      </Modal.Body>
      <Comments id={fullscreencard.id} marvelStorage={marvelStorage} />
    </Modal>
  )
}

  

  
export default FullScreenCard