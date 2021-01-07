import React, { useState } from "react"
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Routes from './routes'
import './App.css'



function App() {

    const [isOpen, setOpen] = useState(false)

    const onClickButNav = () => {
        if (isOpen) {
        setOpen(false)
        } else {
        setOpen(true)
        }
    }

    const onClickBody = () => {
        if (isOpen) {
        setOpen(false)
        }
        console.log(isOpen)
    }
    return (
            <Router>
                <Header onClickButNav={onClickButNav} onClickBody={onClickBody} isOpen={isOpen} />
                <Routes onClickBody={onClickBody} />
                <Footer />
            </Router>
    );
}

export default App;
