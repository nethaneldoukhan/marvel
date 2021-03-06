import React, { useState } from "react"
import { Card, Row, Col } from "react-bootstrap";
import FullScreenCard from "./fullScreenCard/fullScreenCard";

import './cards.css'


  

  
function Cards({list}) {

  const [fullScreenCard, setFullScreenCard] = useState({name: '', thumbnail: {path: '', extension: ''}, description: ''});
  const [modalShow, setModalShow] = useState(false);


  function openFullScreen(item) {
    console.log(item)
    setFullScreenCard(item)
    setModalShow(true)
  }
  
    return (
      <>
        <div className="container-cards min-height-400">
          <Row as="ul" lg={3}>
            {list.map((item) => {
              return (
                <Col as="li" key={item.id} onClick={() => openFullScreen(item)}>
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
          </Row>
        </div>

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