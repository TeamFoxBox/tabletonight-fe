import AuthService from './AuthService'

export default class ReserveService extends AuthService {
    reserve(date, time) {
        // Our backend endpoint
        console.log(date, time);
        return this.fetch(`${this.domain}/appointments`, {
            method: 'POST',
            body: JSON.stringify({
            // We pass in email and password from the login form
                rsvp: {
                    date,
                    time
                }
            })
        }).then(res => {
            console.log("reserve auth", res);
            return Promise.resolve(res)
        })
        // }).then((rawResponse) => {
        //     let parsedResponse = rawResponse.json()
        //     return parsedResponse
            // console.log("Response from authService.register:", res);
            // this.setToken(res.jwt)
            // return Promise.resolve(res);
    }
}
