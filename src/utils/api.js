var Api = {
  rootUrl: "https://echo-chmbr.herokuapp.com",

  get: function(endpoint, callback) {
    fetch(`${this.rootUrl}${endpoint}`, {
      mode: 'cors',
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      return callback(json)
    });
  },
};

export default Api;
