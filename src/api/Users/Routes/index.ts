import { Router } from 'express'

import UserController from '../Controllers/UserController'
import { validateRequest } from '../../../Infrastructures/Requests'
import { rules } from '../Requests/CreateUserRequest'

const userRouter: Router = Router()
const userController = new UserController()

userRouter.get('/', userController.index)
userRouter.get('/send-request', userController.sendRequest)
userRouter.get('/exceptions', userController.exceptions)
userRouter.get('/show/:id', userController.show)
userRouter.post('/', validateRequest(rules), userController.create)

export default userRouter
