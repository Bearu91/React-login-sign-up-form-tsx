import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div>Homepage</div>
      <Link to="/hello">Go to Hello</Link>
    </div>
  );
};
