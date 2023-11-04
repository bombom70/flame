import axios from "axios";

export const fetchPeoples = async () => {
  try {
    const { data } = await axios('https://swapi.dev/api/people')
    return data
  } catch (error) {
    console.log(error);
  }
}

export const fetchPeopleById = async (id: string) => {
  try {
    const { data } = await axios(`https://swapi.dev/api/people/${id}`)
    return data
  } catch (error) {
    console.log(error);
  }
}

export const fetchSearchPeoples = async (query: string) => {
  try {
    const { data } = await axios('https://swapi.dev/api/people', { params: { search: query } })
    return data
  } catch (error) {
    console.log(error)
  }
}