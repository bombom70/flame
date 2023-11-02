export interface IPeopleState {
  peoples: IPeople[],
  currentPerson: IPeople,
  searchPeoples: IPeople[],
}

export interface IPeople {
  id: string
  name: string
  height: string
  mass: string
  hair_color: string
  url: string
}