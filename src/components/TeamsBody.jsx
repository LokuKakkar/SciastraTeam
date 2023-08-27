import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mentors from "./Mentors";
import Advisors from "./Advisors"



function TeamsBody(){

    return(
        <div className="mainbody">
            <div className="titlee"  >
                <h1 style={{fontWeight:"700"}}> Teams </h1>
                <h2 style={{fontWeight:"700"}}> Learn from Scientists and research scholars from top institutes in the world.</h2>
            </div>

            <div className="universities">

                <Container>
                    
                    <Row className="row">
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>

                    </Row>
                    <Row className="row">
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>

                    </Row>
                    <Row className="row">
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>
                        <Col xs={6} md={3}> <Button className="btn btn2"> Cambridge University </Button> </Col>

                    </Row>
                </Container>

            </div>

            <Mentors />

            <Advisors />

        </div>
        
    )
    


}

export default TeamsBody;

