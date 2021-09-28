const baseURL = "http://localhost:9999";
async function postJSON(path, data) {
  return fetch(baseURL + path, {
    body: JSON.stringify(data),
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include",
    withCredentials: true,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      } else {
        return res;
      }
    })
    .then((res) => res.json());
}

async function getJSON(path) {
  return fetch(baseURL + path, {
    method: "GET",
    headers: { accept: "application/json" },
    credentials: "include",
    withCredentials: true,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      } else {
        return res;
      }
    })
    .then((res) => res.json());
}

module.exports = {
  postJSON,
  getJSON,
};
