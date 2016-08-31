const rootUrl = "https://echo-chmbr.herokuapp.com";

export default function get(endpoint, callback) {
  fetch(`${rootUrl}${endpoint}`, {
    mode: 'cors',
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    return response.json();
  }).then((json) => {
    return callback(json)
  });
};
