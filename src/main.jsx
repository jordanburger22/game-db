import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ValorantProvider } from './context/ValorantProvider.jsx'
import OverwatchProvider from './context/OverwatchProvider.jsx';
import { LeagueProvider } from './context/LeagueProvider.jsx';
import MonsterHunterProvider from './context/MonsterHunterProvider.jsx';
import { SearchProvider } from './context/SearchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ValorantProvider>
    <OverwatchProvider>
      <LeagueProvider>
        <MonsterHunterProvider>
          <SearchProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </SearchProvider>
        </MonsterHunterProvider>
      </LeagueProvider>
    </OverwatchProvider>
  </ValorantProvider>
)
