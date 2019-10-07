import { ResponseErrorTrait, ResponseSuccessTrait, ResponseTraitInterface } from '../Contracts/ResponseTrait'
import { Response } from 'express'

class ResponseTraits implements ResponseTraitInterface {
  public static successData = (data: any): ResponseSuccessTrait => {
    return {
      status: true,
      data,
      message: 'OK',
    }
  }

  public static errorData = (message: any = 'ERROR'): ResponseErrorTrait => {
    return {
      status: false,
      data: null,
      message,
    }
  }

  public success(res: Response, data: any): ResponseSuccessTrait {
    return res.status(200).send(ResponseTraits.successData(data))
  }

  public error(res: Response, message: any, statusCode = 404): ResponseErrorTrait {
    return res.status(statusCode).send(ResponseTraits.errorData(message))
  }
}

export default ResponseTraits
