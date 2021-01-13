import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Routes from './routes'
import './App.css'



function App() {

    return (
            <Router>
                <Header />
                <Routes />
                <Footer />
            </Router>
    );
}

export default App;
