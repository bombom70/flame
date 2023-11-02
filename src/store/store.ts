import { createStore } from "vuex"
import { IPeopleState, IPeople } from "../models/models"
import { fetchPeoples } from '../services/people';
import { getId } from '../utils/getId'

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
      }
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
  },
  mutations: {
    addPeoples (state: IPeopleState, payload: IPeople[]) {
      state.peoples = payload
    }
  },
  actions: {
    async fetchPeoples({ commit }) {
      const { results } = await fetchPeoples();
      const peoples = results.map((p: IPeople) =>  {
        return { ...p, id: getId(p.url) }
      })
      commit('addPeoples', peoples);
    }
  }
})
