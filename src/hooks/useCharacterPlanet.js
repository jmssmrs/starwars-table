import { useQuery } from 'react-query'
import axios from 'axios'

const fetchCharacterPlanet = (planetUrl) => {
    return axios.get(`${planetUrl}`)
}

export const useCharacterPlanet = (planetUrl) => {
    return useQuery(['characterPlanet', planetUrl], () => fetchCharacterPlanet(planetUrl),
        {
            // The query will not execute until the planetUrl exists
            enabled: !!planetUrl,

        })
}

