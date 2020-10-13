import axios from "axios/index";

const expURL = 'http://39.104.171.34:8080/javaApi-1.0/api/';

export default {
  state: {
    infos: {},
    lists: {},
  },
  getters: {
    infos: state => state.infos,
    lists: state => state.lists,
  },
  mutations: {
    setInfos(state, payload) {
      state.infos = payload
    },
    setLists(state, payload) {
      state.lists = payload
    },
  },
  actions: {
    async getInfos({ commit }) {
      let ret = await axios.get(expURL + "getInfo")
      commit("setInfos", ret.data.data)
    },
    async getLists({ commit }, params) {
      let ret = await axios.post(expURL + "geHis", params)
      commit("setLists", ret.data.data)
    }
  }
};
