import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbarr(){
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{backgroundColor:"transparent"}}>
      <Container style={{backgroundColor:"transparent"}}>

        <Navbar.Brand href="#home"> 
        <img style={ {borderRadius: "50%" , width: "65px"} } src="https://www.sciastra.com/Assets/Images/newsciastra.jpg" alt="SciAstra Logo" />
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            
          </Nav> */}
          <Nav className="ms-auto">
            <Nav.Link className="menu-item" style={{paddingLeft:"5vw"}} href="#features">Home</Nav.Link>
            <Nav.Link className="menu-item" style={{paddingLeft:"5vw"}} href="#pricing">Courses</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sections</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link className="menu-item" style={{paddingLeft:"5vw"}} href="#features">Sections</Nav.Link>
            <Nav.Link className="menu-item" style={{paddingLeft:"5vw"}} href="#pricing">Blogs</Nav.Link>
            <Nav.Link className="menu-item" style={{paddingLeft:"5vw"}} href="#deets">Materials</Nav.Link>
            <Nav.Link className="menu-item active" style={{paddingLeft:"5vw"}} href="#features" >Teams</Nav.Link>
            <Nav.Link className="menu-item" style={{paddingLeft:"5vw"}} href="#pricing">Contact us</Nav.Link>
            
            <Button className="btn">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    )
    


}

export default Navbarr;

