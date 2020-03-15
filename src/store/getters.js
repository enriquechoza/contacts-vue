const getters = {
  isLoading(state) {
    return state.isLoading;
  },
  contactList(state) {
    return state.contacts;
  },
  totalContacts(state) {
    return state.totalContacts;
  },
  search(state) {
    return state.search;
  }
};

export default getters;
