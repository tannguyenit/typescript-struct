import { Request, Response } from 'express'
import { BaseController } from '../../../Infrastructures/Controllers'
import { ResponseSuccessTrait } from '../../../Infrastructures/Contracts/ResponseTrait'
import { NotFoundException } from '../../../Infrastructures/Exceptions'
import { axiosClient } from '../../../Infrastructures/Utils'

class UserController extends BaseController {
  public index = (request: Request, response: Response): ResponseSuccessTrait => {
    return this.success(response, { x: 'x' })
  }

  public create = (request: Request, res: Response): any => {
    return this.success(res, res.body)
  }

  public show = (request: Request, res: Response): any => {
    return this.success(res, request.params)
  }

  public exceptions = (): any => {
    throw new NotFoundException('user not found')
  }

  public sendRequest = async (req: Request, res: Response): Promise<any> => {
    try {
      const data = await axiosClient.get('https://petstore.swagger.io/v2/pet/0')

      return this.success(res, data)
    } catch (e) {
      return this.error(res, e.data)
    }
  }
}

export default UserController
