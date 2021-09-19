import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from 'components/DefaultLayout';
import 'assets/styles/index.scss';
import { Router } from './Router';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </BrowserRouter>
  );
};
