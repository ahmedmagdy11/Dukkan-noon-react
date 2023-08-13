// Function for GET requests
export function get(url) {
  return fetch(url)
    .then(response => response.json());
}

// Function for POST requests
export function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}

// Function for PUT requests
export function put(url, data) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}

// Function for DELETE requests
export function del(url) {
  return fetch(url, {
    method: 'DELETE'
  })
  .then(response => response.json());
}
