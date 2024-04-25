import * as React from "react"
import {Link} from "gatsby"
import {Col, Container, Row} from "react-bootstrap";

const Header = ({siteTitle}) => (
    <header>
        <Container>
            <Row>
                <Col>
                    <Link to="/">{siteTitle}</Link>
                </Col>
            </Row>
        </Container>
    </header>
)

export default Header
