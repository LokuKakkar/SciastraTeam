import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Mentors(){
    return(
        <Container>
                <div className="titlee centerr">

                    <h1 style={{fontWeight:"700"}}> Meet your Mentors </h1>

                </div>

                <Row className="mentors">


                    {[...Array(8)].map((elementInArray, index) => ( 
                        <Col className="mentor pt-5 centerr" xs={6} md={3}>

                        <div className="mentorimg">

                            <img src="http://sciastra.com/new_admin//teams/files/Kedar_Tornekar1.jpg"/>

                        </div>
                        <span style={{fontSize:"13px"}}> Shubham </span>
                        <div>
                        <span style={{fontSize:"10px"}}>Cambridge Uni, UK</span>

                        </div>

                    </Col>
                    ))}
                    

                </Row>
            </Container>
    )
}


export default Mentors;