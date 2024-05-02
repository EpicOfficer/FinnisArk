import * as React from "react"
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from "gatsby"

const MainNav = ({siteTitle}) => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default MainNav;