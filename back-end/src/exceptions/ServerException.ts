import HttpException from './HttpException'

export class ServerException extends HttpException {
  constructor(message:any, errors = {}) {
    super(message || 'Server Internal Error', 500, errors);
  }
}

export default ServerException;
