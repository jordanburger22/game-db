import './CSS/App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import ValorantHome from './components/Valorant/ValorantHome'
import ValorantAgentList from './components/Valorant/ValorantAgentList'
import AgentDetails from './components/Valorant/AgentDetails'
import ValorantWeaponList from './components/Valorant/ValorantWeaponList'
import WeaponDetails from './components/Valorant/WeaponDetails'
import Header from './components/Header'
import OverwatchHome from './components/Overwatch/OverwatchHome'
import './CSS/Overwatch.css'
import './CSS/League.css'
import OverwatchHeroes from './components/Overwatch/OverwatchHeroes'
import HeroDetails from './components/Overwatch/HeroDetails'
import OverwatchMaps from './components/Overwatch/OverwatchMaps'
import LeagueHome from './components/League of Legends/LeagueHome'
import LeagueHeroes from './components/League of Legends/LeagueHeroes'
import ChampionDetails from './components/League of Legends/ChampionDetails'
import './CSS/Home.css'
import MonsterHunterHome from './components/MonsterHunterWorld.jsx/MonsterHunterHome'
import './CSS/MonsterHunter.css'
import MonsterHunterWeaponsHome from './components/MonsterHunterWorld.jsx/MonsterHunterWeaponsHome'
import MonsterHunterWeaponType from './components/MonsterHunterWorld.jsx/MonsterHunterWeaponType'
import MHWWeaponDetails from './components/MonsterHunterWorld.jsx/MHWWeaponDetails'
import MonsterHuntersMonsters from './components/MonsterHunterWorld.jsx/MonsterHunterMonsters'



function App() {

  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/game/valorant' element={<ValorantHome />} />
        <Route path='/game/valorant/agents' element={<ValorantAgentList />} />
        <Route path='/game/valorant/agents/:agentName' element={<AgentDetails />} />

        <Route path='/game/valorant/weapons' element={<ValorantWeaponList />} />
        <Route path='/game/valorant/weapons/:weaponName' element={<WeaponDetails />} />


        <Route path='/game/overwatch' element={<OverwatchHome />} />
        <Route path='/game/overwatch/heroes' element={<OverwatchHeroes />} />
        <Route path='/game/overwatch/heroes/:heroKey' element={<HeroDetails />} />
        <Route path='/game/overwatch/maps' element={<OverwatchMaps />} />


        <Route path='/game/league of legends' element={<LeagueHome />} />
        <Route path='/game/league of legends/heroes' element={<LeagueHeroes />} />
        <Route path='/game/league of legends/heroes/:champName' element={<ChampionDetails />} />

        <Route path='/game/monster hunter world' element={<MonsterHunterHome />} />
        <Route path='/game/monster hunter world/weapons' element = {<MonsterHunterWeaponsHome />}/>
        <Route path='/game/monster hunter world/weapons/:weaponType' element = {<MonsterHunterWeaponType/>}/>
        <Route path='/game/monster hunter world/weapons/:weaponType/:weaponName' element = {<MHWWeaponDetails/>}/>

        <Route path='/game/monster hunter world/monsters' element = {<MonsterHuntersMonsters />}/>
      </Routes>
    </>
  )
}

export default App
