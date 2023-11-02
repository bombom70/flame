import { createStore } from "vuex"
import { IPeopleState, IPeople } from "../models/models"
import { getId } from '../utils/getId'
import { fetchPeoples, fetchSearchPeoples, fetchPeopleById } from '../services/people';

export const peoplesStore = createStore({
  state(): IPeopleState {
    return {
      peoples: [],
      currentPerson: {
        id: '',
        name: '',
        height: '',
        mass: '',
        hair_color: '',
        url: '',
      },
      searchPeoples: [],
    }
  },
  getters: {
    getPeoples(state: IPeopleState): IPeople[] {
      return state.peoples;
    },
    getPerson(state: IPeopleState): IPeople {
      return state.currentPerson;
    },
    getFavoritesPeoples: (state: IPeopleState) => (ids: string[]): IPeople[] => {
      return state.peoples.filter(p => ids.includes(p.id));
    },
    getSearchPeoples(state: IPeopleState): IPeople[] {
      return state.searchPeoples;
    },
  },
  mutations: {
    addPeoples (state: IPeopleState, payload: IPeople[]) {
      state.peoples = payload
    },
    addSearchPeoples (state: IPeopleState, payload: IPeople[]) {
      state.searchPeoples = payload
    },
    setCurrentPerson(state: IPeopleState, payload: IPeople) {
      state.currentPerson = payload
    },
  },
  actions: {
    async fetchPeoples({ commit }) {
      const { results } = await fetchPeoples();
      const peoples = results.map((p: IPeople) =>  {
        return { ...p, id: getId(p.url) }
      })
      commit('addPeoples', peoples);
    },
    async fetchSearchPeoples({ commit }, query: string) {
      if (query.trim() === '') {
        commit('addSearchPeoples', []);
        return
      }
      const { results } = await fetchSearchPeoples(query);
      commit('addSearchPeoples', results);
    },
    async fetchPeopleById({ commit }, id: string) {
      const data = await fetchPeopleById(id);
      commit('setCurrentPerson', data);
    },
  }
})
