import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Hello } from 'pages/Hello';
import { Login } from 'pages/Login';
import { Signup } from 'pages/Signup';

export const Router: React.FC = () => {
  return (
    <Switch>
      {/*
        strictly defined paths take precedence:
        example: i.e. /recipes/create should appear after /recipes/:id
        example: i.e. /recipes should appear after /
      */}
      <Route path="/hello">
        <Hello />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/sign-up">
        <Signup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
