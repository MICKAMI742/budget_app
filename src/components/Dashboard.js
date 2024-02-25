import React from "react";
import Stack from "react-bootstrap/Stack";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/Dashboard.css";

const Card = () => {
    return (
        <Container className="card">
            <Row>
                <Col>
                    <p className="cardTitle">Card</p>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <p className="cardNumber">**** **** **** 6857</p>
            </Row>
            <Row>
                <Col>Card holder</Col>
                <Col>Valid thru</Col>
            </Row>
            <Row>
                <Col>Michał Kamiński</Col>
                <Col>04/2027</Col>
            </Row>
        </Container>
    );
}
const Income = () => {
    return (
        <div>
            <h2>Income</h2>
        </div>
    );
}

const Activity = () => {
    return (
        <div>
            <h2>Activity</h2>
        </div>
    );
}

const Dashboard = () => {
    return (
        <Stack>
            <Container className="dashboard">
                <Row>
                    <Col><Card /></Col>
                    <Col><Income /></Col>
                </Row>
                <Row>
                    <Row>
                        <Activity />
                    </Row>
                </Row>
            </Container>
        </Stack>)
};

export default Dashboard;