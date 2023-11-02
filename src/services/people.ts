import axios from "axios";

export const fetchPeoples = async () => {
  const { data } = await axios('https://swapi.dev/api/people')
  return data;
}

export const fetchPeopleById = async (id: string) => {
  const { data } = await axios(`https://swapi.dev/api/people/${id}`)
  return data
}

export const fetchSearchPeoples = async (query: string) => {
  try {
    const { data } = await axios('https://swapi.dev/api/people', { params: { search: query } })
    return data
  } catch (error) {
    console.log(error);
  }
}