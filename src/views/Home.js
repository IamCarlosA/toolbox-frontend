import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from '../components/Table';

const Home = () => {
  const { files } = useLoaderData();
  return (
    <div className="d-flex flex-column gap-3">
      <Table files={files} />
    </div>
  );
};

export default Home;
