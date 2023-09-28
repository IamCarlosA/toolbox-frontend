import React from 'react';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/Navbar';

const Layout = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <NavbarComponent />
      <Container className="py-4">
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
