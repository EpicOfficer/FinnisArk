import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Button, Col, Container, Row} from "react-bootstrap";
import FacebookFeed from "../components/FacebookFeed";
import SocialMediaBlock from "../components/SocialMediaBlock";

const IndexPage = () => (
    <Layout>
        <Container>
            <Row>
                <Col sm={6} className={"pb-4"}>
                    <StaticImage
                        src={"../images/FinnisArkCar2.jpg"}
                        alt={"Finnis Ark Car"}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                    />
                </Col>
                <Col sm={6} className={"p-5"}>
                    <h1>Who we are?</h1>
                    <p>Ultrices leo nisl nunc proin nunc neque turpis aliquet. Tempus velit semper et maecenas. Consectetur rhoncus facilisis amet elit maecenas molestie venenatis scelerisque. Mattis tincidunt odio id tempus sed urna. Tortor condimentum tincidunt id in ut. Lorem sit amet sit massa commodo laoreet non quis sapien. Metus commodo ultrices orci.
                    </p>
                    <p>Ultrices leo nisl nunc proin nunc neque turpis aliquet. Tempus velit semper et maecenas. Consectetur rhoncus facilisis amet elit maecenas molestie venenatis scelerisque. Mattis tincidunt odio id tempus sed urna. Tortor condimentum tincidunt id in ut. Lorem sit amet sit massa commodo laoreet non quis sapien. Metus commodo ultrices orci.</p>
                    <p><Button variant="primary">Read more</Button></p>
                </Col>
            </Row>
        </Container>
        <Container fluid className={"px-0"}>
            <Row className={"bg-primary text-white"}>
                <Col>
                    <SocialMediaBlock/>
                </Col>
            </Row>
        </Container>
    </Layout>
)

export const Head = () => <Seo title="Home"/>

export default IndexPage
