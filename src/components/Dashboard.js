import React from "react";
import Stack from "react-bootstrap/Stack";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Card = () => {
    return (
        <div>
            <h2>Card</h2>
        </div>
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
            <Container>
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