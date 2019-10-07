import HttpException from './HttpException'

class NotFoundException extends HttpException {
  constructor(message: string = 'DATA NOT FOUND') {
    super(404, message)
  }
}

export default NotFoundException
