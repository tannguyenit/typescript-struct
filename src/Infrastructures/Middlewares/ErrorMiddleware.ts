import { Request, Response } from 'express'
import HttpException from '../Exceptions/HttpException'
import { ResponseErrorTrait } from '../Contracts/ResponseTrait'

function errorMiddleware(error: HttpException, request: Request, response: Response, {}) {
  const statusCode = error.statusCode || 500
  const message = error.message || 'Something went wrong'
  const errorData: ResponseErrorTrait = {
    status: false,
    data: null,
    message,
  }

  return response.status(statusCode).send(errorData)
}

export default errorMiddleware
