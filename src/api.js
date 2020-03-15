const url = "http://localhost:3000";

var headers = new Headers();
headers.append("Content-Type", "application/json");

function getContacts(search) {
  return fetch(`${url}/contacts${search != "" ? "?search=" + search : ""}`, {
    method: "GET",
    headers: headers,
    redirect: "follow"
  })
    .then(res => res.json())
    .catch(error => console.error(error));
}

function submitContact(contact) {
  return fetch(`${url}/contacts`, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: headers
  })
    .then(res => res.json())
    .catch(error => console.error(error));
}

export default {
  getContacts,
  submitContact
};
