export class HttpException extends Error {
  status;
  message;
  errors;

  constructor(message: any, status: any, errors: any) {
    // super(message, status);
    super(message);
    this.status = status;
    this.message = message;
    this.errors = errors;
  }
}

export default HttpException;
