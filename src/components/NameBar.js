import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../styles/NameBar.css";

const NameBar = () => {
    return (
        <Container className="namebar">
            <Row>My name is Michal</Row>
            <Row>
                <h5>Payment history</h5>
            </Row>
        </Container>);
}

export default NameBar;