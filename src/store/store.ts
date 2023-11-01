import { createStore } from "vuex"
import { IPeopleState, IPeople } from "../models/models"
import { fetchPeoples } from '../services/people';

export const peoplesStore = createStore({
  state(): IPeopleState {
    return {
      peoples: [],
      currentPerson: {
        name: '',
        height: '',
        mass: '',
        hairColor: '',
      }
    }
  },
  getters: {
    getPeoples(state: IPeopleState): IPeople[] {
      return state.peoples;
    },
    getPerson(state: IPeopleState): IPeople {
      return state.currentPerson;
    }
  },
  mutations: {
    addPeoples (state: IPeopleState, payload: IPeople[]) {
      state.peoples = payload
    }
  },
  actions: {
    async fetchPeoples({ commit }) {
      const { results } = await fetchPeoples();
      console.log(results);
      commit('addPeoples', results);
    }
  }
})
