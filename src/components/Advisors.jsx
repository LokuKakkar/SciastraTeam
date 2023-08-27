import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faTelegram } from '@fortawesome/free-solid-svg-icons'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Advisors(){
    return(
        <div>
            

            <Container>
                <div className="titlee centerr">

                    <h1 style={{fontWeight:"700"}}> Mentors and Advisors </h1>

                </div>

                <Row className="mentors">


                    {[...Array(3)].map((elementInArray, index) => ( 
                        <Col className="mentor advisor pt-5 centerr" xs={12} md={4}>

                        <div className="mentorimg advisorimg">

                            <img src="http://sciastra.com/new_admin//teams/files/Kedar_Tornekar1.jpg"/>

                        </div>
                        <span style={{fontSize:"13px"}}> Shubham </span>
                        <div>
                        <span style={{fontSize:"10px"}}>Cambridge Uni, UK</span>

                        <div class="btncontainer">
                            <button class="messagebtn" data="Message Him Now">
                            <FontAwesomeIcon icon="fa-brands fa-telegram" style={{color: "#141282" , padding:"0 5px"}} />
                            </button>
                        </div>

                        </div>

                    </Col>
                    ))}
                    

                </Row>
            </Container>
        </div>
        
    )
}


export default Advisors;