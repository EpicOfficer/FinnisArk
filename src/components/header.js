import * as React from "react"

import MainNav from "./navbar";

const Header = ({siteTitle}) => (
    <header>
        <MainNav siteTitle={siteTitle}/>
    </header>
)

export default Header
