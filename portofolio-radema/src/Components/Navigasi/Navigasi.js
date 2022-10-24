import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';

function Navigasi() {
  return (
    <Navbar bg="light" expand="lg" className='navbar navbar-expand-lg fixed-top navbarScroll'>
      <Container>
        <Navbar.Brand  className='navbar-brand' href="#home">Radema Panjaitan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto">
            <Nav.Link className='navbar-link' href="#hero">Home</Nav.Link>
            <Nav.Link className='navbar-link' href="#About">About Me</Nav.Link>
            <Nav.Link className='navbar-link' href="#Experience">Experience</Nav.Link>
            <Nav.Link className='navbar-link' href="#Project" >Project</Nav.Link>
            <Nav.Link className='navbar-link' href="#contact" >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;