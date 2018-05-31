const BASE = 'http://localhost:3001'

let createUser = function(user) {
  let newUser = {user: user}
  return fetch(BASE+'/register', {
    body: JSON.stringify(newUser),
    header: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  })
}
export { createUser }
