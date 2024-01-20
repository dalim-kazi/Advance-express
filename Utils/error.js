 export class generalError extends Error{
    constructor(message) {
        super()
        this.message=message 
    }
    getCode(){return 500}
}

export class BadRequest extends generalError {
    constructor(message) {
        super()
        this.name="Bad request"
        this.message=message
    }
    getCode(){return 404}
}

export class NotFound extends generalError {
    constructor(message) {
        super()
        this.name = "Not found"
        this.message =message
    }
    getCode(){return 400}
}