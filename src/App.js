import { lazy, Suspense } from 'react'
import './App.css';
import { ResetCSS } from '@yuki_kurosawa/uikit'
import { HashRouter,Route } from 'react-router-dom';
import GlobalStyle from './style/Global.ts';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core'
const Home = lazy(() => import('./views/Home/index.tsx'));
const Characters = lazy(() => import('./views/Characters/index.tsx'));
const Info = lazy(() => import('./views/Info/index.tsx'));
const Donate = lazy(() => import('./views/Donate/index.tsx'));
const About = lazy(() => import('./views/About/index.tsx'));


function getLibrary(provider) {
  return new Web3(provider)
}


function App({ Component, pageProps }) {
  return (
    <HashRouter>
      <ResetCSS></ResetCSS>
      <GlobalStyle></GlobalStyle>
      <Suspense fallback={<div></div>}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/chara" exact>
          <Characters />
        </Route>
        <Route path="/info" exact>
          <Info />
        </Route>
        <Route path="/donate" exact>
          <Donate />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Suspense>
    </HashRouter>
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

