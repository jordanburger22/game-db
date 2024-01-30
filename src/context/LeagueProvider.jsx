import { createContext, useContext } from "react";
import { useLeagueHeroes } from "../hooks";


export const LeagueContext = createContext()



export const LeagueProvider = ({children}) => {


    const leagueHeroesAPI = useLeagueHeroes()

    return(
        <LeagueContext.Provider value={{leagueHeroesAPI}}>
            {children}
        </LeagueContext.Provider>
    )
}


export const useLeagueContext = () => useContext(LeagueContext)