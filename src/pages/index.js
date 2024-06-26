import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
    <Layout>
        <StaticImage
            src="../images/example.png"
            loading="eager"
            width={64}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
        />
        <h1>Home</h1>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home"/>

export default IndexPage
