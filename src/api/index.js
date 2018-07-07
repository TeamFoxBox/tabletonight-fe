const BASE = 'https://table-tonight-be.herokuapp.com'

let createUser = function(user) {
  let newUser = {user: user}
  return fetch(BASE+'users', {
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  })
  .then((rawResponse) => {
    let parsedResponse = rawResponse.json()
    return parsedResponse
  })
}

export { createUser }


let bookReservation = function(booking) {
  let newReservation = {booking: booking}
  return fetch(BASE+'bookings', {
    body: JSON.stringify(newReservation),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  })
  .then((rawResponse) => {
    let parsedResponse = rawResponse.json()
    return parsedResponse
  })
}

export { bookReservation }
