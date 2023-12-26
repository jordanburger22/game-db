import axios from 'axios'

export const getValorantAgents = async() => {
    try {
        const res = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}