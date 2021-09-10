import logo from './logo.svg';
import React, { lazy, Suspense } from 'react'
import './App.css';
import { Button, Text, ArrowDownIcon, Box, useModal, ResetCSS } from '@pancakeswap/uikit'
import { Router,Route } from 'react-router';
import GlobalStyle from './style/Global.ts';
import history from './routerHistory.ts';
const Home = lazy(() => import('./views/Home/index.tsx'));


function App() {
  return (
    <Router history={history}>
      <ResetCSS></ResetCSS>
      <GlobalStyle></GlobalStyle>
      <Suspense fallback={<div></div>}>
      <Route path="/" exact>
        <Home />
      </Route>
      </Suspense>
    </Router>
  );
}

export default App;
