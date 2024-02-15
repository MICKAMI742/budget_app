import React from 'react';
import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
import '../styles/SideMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CurrentBalance = () => {
    return (
        <Stack className='balance'>
            <h2>{"0$"}</h2>
            <Button className='btn btn-primary-outline current'>Current balance</Button>
        </Stack>)
};

const SideMenu = () => {
    return (
        <Stack className='main'>
            <CurrentBalance />
            <Button variant="primary" className='btn btn-primary-outline'>Dashboard</Button>
            <Button variant="primary" className='btn btn-primary-outline'>Charts</Button>
            <Button variant='primary' className='btn btn-primary-outline'>Cards</Button>
            <Button variant="primary" className='btn btn-primary-outline'>Calendar</Button>
            <Button variant="primary" className='btn btn-primary-outline'>Settings</Button>
        </Stack>
    );
};

export default SideMenu;
