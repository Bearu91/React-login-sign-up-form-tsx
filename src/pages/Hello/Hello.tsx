import React from 'react';
import { Link } from 'react-router-dom';
import './Hello.scss';

export const Hello: React.FC = () => {
  return (
    <div className="hello">
      <div>Hello</div>
      <Link to="/">Go to Home</Link>
    </div>
  );
};
