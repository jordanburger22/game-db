import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import ValorantHome from './components/Valorant/ValorantHome'
import ValorantAgentList from './components/Valorant/ValorantAgentList'
import { ValorantProvider } from './context/ValorantProvider'
import AgentDetails from './components/Valorant/AgentDetails'

function App() {


  return (
    <>


      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/game/valorant' element={<ValorantHome />} />
        <Route path='/game/valorant/agents' element={<ValorantAgentList />} />
        <Route path={`/game/valorant/agents/:agentName`} element = {<AgentDetails />}/>


      </Routes>
    </>
  )
}

export default App
