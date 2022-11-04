import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function NavScrollExample() {
    const router = useRouter();

    //used to get URL to set nav.link activeKey
    const [pageURL, setPageURL] = useState(0);
    useEffect(() => {
      if(window.location.pathname == "/" || window.location.pathname == "/search"){
        setPageURL(window.location.pathname);
      }
      
    },[])
   
  return (
    <>
    
    <Navbar bg="primary" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand>Ryan Locke</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            activeKey={pageURL}  //sets nav.link to active
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Advanced Search</Nav.Link>
          </Nav>
          <Form className="d-flex"      
              onSubmit={(e) =>{
                e.preventDefault()
                let searchbtn = document.getElementById("searchbtn");
                searchbtn.click();
              }}>
            <Form.Control id='input'
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
         
            />
            <Button id="searchbtn" onClick={(e) => {
              let input = document.getElementById("input");
              router.push(`/artwork?title=true&q=${input.value} `)
              input.value = "";  //reset placeholder value in search bar
              }} variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />
    <br />
    <br />
    </>
   
  );
}


export default NavScrollExample;