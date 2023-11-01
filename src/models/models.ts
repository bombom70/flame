export interface IPeopleState {
  peoples: IPeople[],
  currentPerson: IPeople
}

export interface IPeople {
  name: string
  height: string
  mass: string
  hairColor: string
}