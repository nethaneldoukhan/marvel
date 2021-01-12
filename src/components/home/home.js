import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { characterList } from '../../character'
import Search from './search/search'
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

                    <Search />

                    <Row lg={3} className="container-cards">
                        <Cards list={list} />
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Home