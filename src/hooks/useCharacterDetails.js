import { useQuery } from 'react-query'
import axios from 'axios'

const fetchCharacter = () => {
    return axios.get('https://swapi.dev/api/people/')
}

export const useCharacterDetails = () => {
    return useQuery('characterDetails', fetchCharacter)
}