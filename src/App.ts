import express, { Request, Response, Router } from 'express'
import listEndpoints from 'express-list-endpoints'
import * as bodyParser from 'body-parser'

import routes from './Routes'
import { errorMiddleware, loggerMiddleware } from './Infrastructures/Middlewares'

class App {
  public express: express

  constructor() {
    this.express = express()
    this.init()
  }

  private init(): void {
    this.express.use([
      loggerMiddleware,
      bodyParser.json(),
      routes,
      errorMiddleware,
    ])

    console.log(listEndpoints(this.express))
  }
}

export default new App().express
