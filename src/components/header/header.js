import React from 'react'
import { NavLink } from "react-router-dom"
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../../assets/images/MarvelLogo.png'

import './header.css'

  
const Header = ({onClickButNav, onClickBody, isOpen}) => {
  
    return (
        <header>
            <Container fluid="lg" onClick={onClickBody}>
                <Navbar expand="lg" bg="transparent" variant="dark">
                    <Navbar.Brand href="/">
                    <span className="logo-site">
                        <img className="logo-site" src={logo} alt="logo site" />
                    </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={onClickButNav} />
                    <div className={isOpen ? "navbar-collapse collapse show" : "navbar-collapse collapse"} id="responsive-navbar-nav">
                    <Nav as="ul" className="mr-auto">
                        <li>
                        <NavLink
                            className="nav-link"
                            activeClassName="is-active"
                            to="/"
                            exact
                        >
                            Home Page
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            className="nav-link"
                            activeClassName="is-active"
                            to="/favorites"
                            exact
                        >
                            Favorites
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            className="nav-link"
                            activeClassName="is-active"
                            to="/cv"
                            exact
                        >
                            CV
                        </NavLink>
                        </li>
                    </Nav>
                    </div>
                </Navbar>
            </Container>
        </header>
    )
}

export default Header