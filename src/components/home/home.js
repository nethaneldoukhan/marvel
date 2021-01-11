import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Row } from 'react-bootstrap'
import { characterList } from '../../character'
import Cards from '../cards/cards'
import './home.css'


class Home extends Component {

    state = {
        list: characterList,
        loader: false
    }

    componentDidlMount() {
        document.title = 'Home page - Marvel'
        window.scrollTo(0, 0)
    }


    render() {
        const {list} = this.state

        return (
            <section className="home-section">
                <Container>
                    <h1 className="site-title">
                        COMICS COLLECTION
                    </h1>
                    <Form inline className="form-search">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="light">Search</Button>
                    </Form>


                    <Row lg={3} className="container-cards">
                        <Cards list={list} />
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Home