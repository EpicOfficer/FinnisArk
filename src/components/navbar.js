import * as React from "react"
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image";

//Check about fixed top and variant dark, sticky
const MainNav = ({siteTitle}) => (
    <Navbar className="custom-navbar py-0" bg="transparent" sticky={"top"} expand="lg">
        <Container className={"px-0"}>
            <Navbar.Brand href="/">
            <StaticImage 
                src={"../images/FinnisArkLogoCut.png"} 
                alt={siteTitle}
                layout={"fixed"}
                height={85}
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default MainNav;