import axios from "axios";

export const fetchPeoples = async () => {
  const { data } = await axios('https://swapi.dev/api/people')
  return data;
}