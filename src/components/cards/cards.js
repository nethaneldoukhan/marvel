import React, { useState } from "react"
import { Card, Row, Col } from "react-bootstrap";

// import { list } from '../../character'
import FullScreenCard from "./fullScreenCard/fullScreenCard";

import './cards.css'


  

  
function Cards({list}) {

  const [fullScreenCard, setFullScreenCard] = useState({name: '', thumbnail: {path: '', extension: ''}, description: ''});
  const [modalShow, setModalShow] = useState(false);


  function openFullScreen(item) {
    console.log(item)
    // console.log(list[index])
    setFullScreenCard(item)
    setModalShow(true)
  }
  
    return (
      <>
        {list.map((item, index) => {
          return (
            <Col key={index} onClick={() => openFullScreen(item)}>
              <Card bg="light">
                <Row>
                  <Col xs={3}>
                <figure>
                  <Card.Img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} />
                </figure>
                </Col>
                <Col xs={9}>
                  <Card.Title>
                    {item.name.length < 35
                    ? `${item.name}`
                    : `${item.name.substring(0, 35)}...`}
                  </Card.Title>
                </Col>
                </Row>
                <Card.Text>
                  {item.description.length < 120
                  ? `${item.description}`
                  : `${item.description.substring(0, 120)}...`}
                </Card.Text>
              </Card>
            </Col>
        )})}

        {modalShow &&
        <FullScreenCard
          show={modalShow}
          onHide={() => setModalShow(false)}
          fullscreencard={fullScreenCard}
        />}
      </>
    );
  }
  
export default Cards