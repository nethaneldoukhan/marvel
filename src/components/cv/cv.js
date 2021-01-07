import React, { Component } from 'react'
import cv from '../../assets/images/cv.jpg'
import cv_pdf from '../../assets/pdf/cv.pdf'
import { Container } from '@material-ui/core'
import './cv.css'

class CV extends Component {

    componentDidMount() {
        document.title = 'CV - Marvel'
        window.scrollTo(0, 0)
    }
  

    render() {
        return (
            <section className="cv-section">
                <Container>
                    <h1 className="page-title">
                        CV
                    </h1>

                    <div>
                        <a className="cv_pdf" href={cv_pdf} target="_blank" rel="noreferrer">Save this CV in PDF</a>
                        <a href={cv} target="_blank" rel="noreferrer"><img className="cv" src={cv} alt="cv" /></a>
                    </div>
                </Container>
            </section>
        )
    }
}

export default CV