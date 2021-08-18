export class ErrorResponse extends Error {
    constructor(public errorName: string, public statusCode: number, message: string) {
        super(message);
    }
}
