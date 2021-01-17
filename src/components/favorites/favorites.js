import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import Cards from '../cards/cards'

import './favorites.css'

class Favorites extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        document.title = 'Favorites - Marvel'
        window.scrollTo(0, 0)
        const marvelStorageJson = localStorage.getItem('marvel')
        if (marvelStorageJson) {
            const marvelStorage = JSON.parse(marvelStorageJson)
            if(marvelStorage.favorites) {
                this.setState({list: marvelStorage.favorites})
            }
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
                    <Cards list={list} />
                : <p className="folder-empty">THE FOLDER IS EMPTY</p>}
            </Container>
        </section>
        )
    }
}

export default Favorites