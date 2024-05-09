import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"

import {Col, Container, Row} from "react-bootstrap"

import Header from "./header"

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
            <div>
                <main>
                    <Container className={"px-0"}>
                        <Row>
                            <Col>
                                {children}
                            </Col>
                        </Row>
                    </Container>
                </main>
                <footer>
                    <Container>
                        <Row>
                            <Col>
                                <p>© {new Date().getFullYear()} &middot; {data.site.siteMetadata?.title || `Title`}</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </>
    )
}

export default Layout
