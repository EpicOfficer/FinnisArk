import * as React from "react"
import {Button, Container} from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image";
import "../scss/header.scss";
import MainNav from "./navbar";

const Header = ({siteTitle}) => (
    <header className="header">
        <MainNav siteTitle={siteTitle}/>
        <StaticImage
            src={"../images/FinnisArkHorses.jpg"}
            alt={"Finnis Ark Horses"}
            layout={"fullWidth"}
            formats={["auto", "webp", "avif"]}
            style={{position: 'absolute'}}
            className={"header-image"}
        />
        <div className="hero-content text-center">
            <Container>
                <h1>Welcome</h1>
                <p>More examples just to see if it works at all or if it does not</p>
                <p><Button variant="primary">Donate</Button></p>
            </Container>
        </div>
    </header>
)

export default Header