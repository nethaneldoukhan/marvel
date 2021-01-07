import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import image_404 from '../../assets/images/404.png'
import './noMatch.css'



class NoMatch extends Component {

    componentDidMount() {
        document.title = 'Not found - 404 - marvel'
        window.scrollTo(0, 0)
    }

  

    render() {
        return (
            <Container>
                <div className="img-404">
                    <img src={image_404} alt="not found" />
                </div>
            </Container>
        )
    }
}

export default NoMatch
