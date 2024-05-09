import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Col, Container, Row} from "react-bootstrap";
import FacebookFeed from "../components/FacebookFeed";

const IndexPage = () => (
    <Layout>
        <Container fluid>
            <Row>
                <Col className={"pb-4 text-center"}>
                    <h1 className={"px-2"}>Home testy test</h1>
                    <p>Might put this on an image, who knows?</p>
                    <StaticImage
                        src={"../images/FinnisArkCar2.jpg"}
                        alt={"Finnis Ark Car"}
                        layout={"fullWidth"}
                        transformOptions={{fit: "cover"}}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={4} className={"text-center"}>
                    <h2>About Us</h2>
                    <p>Details about how to donate and why donations are important.</p>
                </Col>
                <Col sm={4} className={"text-center"}>
                    <h2>Our Cause</h2>
                    <p>Details about how to donate and why donations are important.</p>
                </Col>
                <Col sm={4} className={"text-center"}>
                    <h2>Donations</h2>
                    <p>Details about how to donate and why donations are important.</p>
                </Col>
                </Row>
                <Row>
                <Col className={"d-flex justify-content-center"}>
                   <div style={{ width: "80%"}}> 
                   <FacebookFeed/>
                   </div>
                </Col>
            </Row>
        </Container>
    </Layout>
)

export const Head = () => <Seo title="Home"/>

export default IndexPage
