import * as React from "react"
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image";

const MainNav = ({siteTitle}) => (
    <Navbar className="custom-navbar" bg="light" expand="lg">
        <Container className={"px-0"}>
            <Navbar.Brand href="/">
            <StaticImage 
                src={"../images/FinnisArkLogo.jpg"} 
                alt={siteTitle}
                layout={"fixed"}
                width={100}
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