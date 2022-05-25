import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState'

import light from './styles/themes/light';
import dark from './styles/themes/dark';   

import GlobalStyle from './styles/global';
import Header from './components/Header';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Wbox from './pages/Wbox';
import Wdesk from './pages/Wdesk';
import Participer from './pages/Participer';
import HomePage from './pages/Home';
import Wscreen from './pages/Wscreen';
import Pro from './pages/Pro';
import SmoothScroll from './components/SmoothScroll';
import SmoothScrollbar from 'smooth-scrollbar';

const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <BrowserRouter>
          <Header toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="wbox">
                  <Route index element={<Wbox />} />
              </Route>

              <Route path="wdesk">
                  <Route index element={<Wdesk />} />
              </Route>

              <Route path="wscreen">
                  <Route index element={<Wscreen />} />
              </Route>

              <Route path="pro">
                  <Route index element={<Pro />} />
              </Route>

              <Route path="participer">
                  <Route index element={<Participer />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

