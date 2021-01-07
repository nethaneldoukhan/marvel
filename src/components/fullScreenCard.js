import React, { useState } from "react"
import { Modal, Button, Card, Row, Col, Form, FormControl } from "react-bootstrap";

import { list } from '../character'

import './fullScreenCard.css'



function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
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
                <Card.Img src={`${list[15].thumbnail.path}.${list[15].thumbnail.extension}`} alt={list[15].name} />
            </figure>
            </Col>
            <Col xs={9}>
                <Card.Title>
                    {list[15].name}
                </Card.Title>
                </Col>
            </Row>

            <Form className="row form-save-favorites">
              <Form.Check 
                type="switch"
                id="custom-switch"
                label="Save this comics to your favorites"
              />
            </Form>

            <Card.Text>
                {list[15].description}
                jkdh dfjhlijdhf fih jhijldf hjhhjihef; hjhfjh dfijh jhdf hjhj;hdf jhjhg jihdg hjigh jihf jihfg jhfigh jfhg hg ;fhg ijhfg;jihf g;hjfhg j;ihfg hfjhj hgjh jhfgj; hjfhgjhfg hjafhg ;jhg ;jafhg; jfhg ;jiadhg;j fgh;jafhg; jafhg;jh ;fjgh;hgijfhga;jfhgn ;jh
                jkdh dfjhlijdhf fih jhijldf hjhhjihef; hjhfjh dfijh jhdf hjhj;hdf jhjhg jihdg hjigh jihf jihfg jhfigh jfhg hg ;fhg ijhfg;jihf g;hjfhg j;ihfg hfjhj hgjh jhfgj; hjfhgjhfg hjafhg ;jhg ;jafhg; jfhg ;jiadhg;j fgh;jafhg; jafhg;jh ;fjgh;hgijfhga;jfhgn ;jh
                jkdh dfjhlijdhf fih jhijldf hjhhjihef; hjhfjh dfijh jhdf hjhj;hdf jhjhg jihdg hjigh jihf jihfg jhfigh jfhg hg ;fhg ijhfg;jihf g;hjfhg j;ihfg hfjhj hgjh jhfgj; hjfhgjhfg hjafhg ;jhg ;jafhg; jfhg ;jiadhg;j fgh;jafhg; jafhg;jh ;fjgh;hgijfhga;jfhgn ;jh
                jkdh dfjhlijdhf fih jhijldf hjhhjihef; hjhfjh dfijh jhdf hjhj;hdf jhjhg jihdg hjigh jihf jihfg jhfigh jfhg hg ;fhg ijhfg;jihf g;hjfhg j;ihfg hfjhj hgjh jhfgj; hjfhgjhfg hjafhg ;jhg ;jafhg; jfhg ;jiadhg;j fgh;jafhg; jafhg;jh ;fjgh;hgijfhga;jfhgn ;jh
                jkdh dfjhlijdhf fih jhijldf hjhhjihef; hjhfjh dfijh jhdf hjhj;hdf jhjhg jihdg hjigh jihf jihfg jhfigh jfhg hg ;fhg ijhfg;jihf g;hjfhg j;ihfg hfjhj hgjh jhfgj; hjfhgjhfg hjafhg ;jhg ;jafhg; jfhg ;jiadhg;j fgh;jafhg; jafhg;jh ;fjgh;hgijfhga;jfhgn ;jh
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
  
  function FullScreenCard(props) {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
export default FullScreenCard