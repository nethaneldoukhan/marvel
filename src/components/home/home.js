import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Row, Col, Card, CardImg, CardTitle, CardBody } from 'react-bootstrap'
import { list } from '../../character'
import FullScreenCard from '../fullScreenCard'
import './home.css'


class Home extends Component {

    componentDidlMount() {
        document.title = 'Home page - Marvel'
        window.scrollTo(0, 0)
    }


    render() {
        const {onClickBody} = this.props
        return (
            <section className="home-section" onClick={onClickBody}>
                <Container>
                    <h1 className="site-title">
                        COMICS COLLECTION
                    </h1>
                    <Form inline className="form-search">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="light">Search</Button>
                    </Form>

                    <FullScreenCard />

                    <Row lg={3} className="container-cards">
                    {list.map((item, index) => {
                        return (
                            <Col>
                                <Card bg="light" key={index}>
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
                </Container>
            </section>
        )
    }
}

export default Home