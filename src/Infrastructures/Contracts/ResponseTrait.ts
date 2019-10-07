export interface ResponseSuccessTrait {
  status: boolean
  data: any
  message: string
}

export interface ResponseErrorTrait {
  status: boolean
  data: any
  message: any
}

export interface ResponseTraitInterface {
  success(res: Response, data: any): ResponseSuccessTrait

  error(message: any, statusCode: number): ResponseErrorTrait
}
