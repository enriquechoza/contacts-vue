import api from "../api";

const actions = {
  fetchContacts({ commit, state }) {
    commit("loadingState", { isLoading: true });
    api
      .getContacts(state.search)
      .then(res => {
        commit("totalContacts", res.count);
        commit("receivedContacts", res.data);
        commit("loadingState", { isLoading: false });
      })
      .catch(err => console.log(err));
  },
  async submitContact({ commit }, contact) {
    await api
      .submitContact(contact)
      .then(res => {
        commit("createdContact", res.data);
      })
      .catch(err => console.log(err));
  }
};

export default actions;
