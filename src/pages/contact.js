import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Col, Container, Row} from "react-bootstrap";

const ContactPage = () => (
    <Layout>
        <Container>
            <Col>
            <Row>
            <h1>Contact</h1>
            <p>How to get in touch with us, blah blah </p>
            </Row>
            </Col>
        </Container>
    </Layout>
)

export const Head = () => <Seo title="Contact"/>

export default ContactPage
