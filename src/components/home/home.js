import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
// import { characterList } from '../../character'
import Search from './search/search'
import Cards from '../cards/cards'
import './home.css'


class Home extends Component {

    state = {
        list: [],
        loader: false
    }

    componentDidlMount() {
        document.title = 'Home page - Marvel'
        window.scrollTo(0, 0)
    }

    updateList = (results) => {
        this.setState({list: results})
    }


    render() {
        const {list} = this.state

        return (
            <section className="home-section">
                <Container>
                    <h1 className="site-title">
                        COMICS COLLECTION
                    </h1>

                    <Search updateList={this.updateList} />

                    <div className="container-cards">
                        <Row as="ul" lg={3}>
                            <Cards list={list} />
                        </Row>
                    </div>
                </Container>
            </section>
        )
    }
}

export default Home