import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
    <Layout>
        <h1>About Finni's Ark</h1>
        <p>This will be an about page</p>
    </Layout>
)

export const Head = () => <Seo title="About"/>

export default AboutPage
