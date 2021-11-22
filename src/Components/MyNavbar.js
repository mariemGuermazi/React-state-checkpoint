import React from 'react'
import {Navbar, Container} from 'react-bootstrap'

const MyNavbar = () => {

    const navbarstyle = {
        marginBottom : "20px"
    };

    return (
        <div>
            <Navbar bg="primary" variant="dark" style ={navbarstyle}>
                <Container>
                    <Navbar.Brand href="#home">React state CP</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar
