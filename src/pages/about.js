import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Col, Container, Row} from "react-bootstrap";

const AboutPage = () => (
    <Layout>
        <Container>
        <h1 className={"text-center"}>About Finni's Ark</h1>
        <p className={"text-center"}>This will be an about page</p>
        </Container>
    </Layout>
)

export const Head = () => <Seo title="About"/>

export default AboutPage
