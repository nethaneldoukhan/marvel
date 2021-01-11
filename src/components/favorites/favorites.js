import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'

import Cards from '../cards/cards'

import './favorites.css'

class Favorites extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        document.title = 'Favorites - Marvel'
        window.scrollTo(0, 0)
        const getFavorites = localStorage.getItem('marvel-favorites')
        if (getFavorites) {
            this.setState({list: JSON.parse(getFavorites)})
        }
    }
  

    render() {

        const {list} = this.state
        console.log(list)

        return (
        <section className="favorites-section">
            <Container>
                <h1 className="favorites-title">
                FAVORITES
                </h1>
                
                {list[0] ?
                <Row lg={3} className="container-cards">
                    <Cards list={list} />
                </Row>
                : <p className="folder-empty">THE FOLDER IS EMPTY</p>}
            </Container>
        </section>
        )
    }
}

export default Favorites