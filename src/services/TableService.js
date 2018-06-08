import AuthService from './AuthService'


export default class TableService extends AuthService {
    setTable(table) {
        // Our backend endpoint
        console.log(table);
        return this.fetch(`${this.domain}/bookings`, {
            method: 'POST',
            body: JSON.stringify({
            // We pass in email and password from the login form
                table: table
            })
        }).then((rawResponse) => {
            let parsedResponse = rawResponse.json()
            return parsedResponse
            // console.log("Response from authService.register:", res);
            // this.setToken(res.jwt)
            // return Promise.resolve(res);
        })
    }
}
