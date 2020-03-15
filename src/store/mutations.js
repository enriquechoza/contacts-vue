const mutations = {
  loadingState(state, { isLoading }) {
    state.isLoading = isLoading;
  },
  receivedContacts(state, contacts) {
    state.contacts = contacts;
  },
  createdContact(state, contact) {
    state.contacts.push(contact);
  },
  totalContacts(state, total) {
    state.totalContacts = total;
  },
  search(state, value) {
    state.search = value;
  }
};

export default mutations;
