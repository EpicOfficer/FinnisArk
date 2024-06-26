import React from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';

const SocialMediaBlock = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} className="p-0 text-center bg-primary">
                    <h2>Title</h2>
                    <p>Description text...</p>
                    <Button variant="light" className="mr-2">Facebook</Button>
                    <Button variant="light">Twitter</Button>
                </Col> 
            </Row>
        </Container>
    );
};
export default SocialMediaBlock;