import React from 'react';
// import '../styles/NavTabs.css';

import { Container, Navbar, Nav } from "react-bootstrap";
// import '../styles/NavTabs.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (

<>
<Navbar bg="light" variant="light" expand="lg">
  <Container>
    {/* <Navbar.Brand><h1>React-Bootstrap</h1></Navbar.Brand> */}
    <h1>Avalynn Helgrave</h1>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link 
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >About Me</Nav.Link>
        <Nav.Link 
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >Portfolio</Nav.Link>
        <Nav.Link 
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >Contact Me</Nav.Link>
        <Nav.Link 
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>

);
}

export default NavTabs;
