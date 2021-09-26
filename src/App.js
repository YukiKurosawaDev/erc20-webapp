import { lazy, Suspense } from 'react'
import './App.css';
import { ResetCSS } from '@yuki_kurosawa/uikit'
import { Router,Route } from 'react-router';
import GlobalStyle from './style/Global.ts';
import history from './routerHistory.ts';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core'
const Home = lazy(() => import('./views/Home/index.tsx'));


function getLibrary(provider) {
  return new Web3(provider)
}


function App({ Component, pageProps }) {
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

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  )
};

