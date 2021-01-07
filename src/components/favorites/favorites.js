import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import './favorites.css'

class Favorites extends Component {

    componentDidMount() {
        document.title = 'Favorites - Marvel'
        window.scrollTo(0, 0)
    }
  

    render() {
        return (
            <section className="favorites-section">
                <Container>
                    <h1 className="favorites-title">
                        FAVORITES
                    </h1>
                </Container>
            </section>
        )
    }
}

export default Favorites