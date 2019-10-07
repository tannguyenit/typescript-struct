import { Router, Response, Request } from 'express'

import userRouter from '../api/Users/Routes'

const routers: Router = Router()

routers.get('/', (req: Request, res: Response) => res.status(200).send('Hello World!'))
routers.use('/users', userRouter)

export default routers
