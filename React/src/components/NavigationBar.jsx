import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Nojus Šostakas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">List</Nav.Link>
            <Nav.Link href="/NewRecord">Add new</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;