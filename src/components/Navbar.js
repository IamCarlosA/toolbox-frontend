import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: 'white', boxShadow: '0 4px 2px -2px gray' }}
      >
        <Container>
          <Navbar.Brand style={{ color: 'white' }}>
            <img
              src="https://files.toolboxtve.com/wp-content/uploads/2018/04/15144954/logo-stycky.png"
              className=""
              alt="logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
