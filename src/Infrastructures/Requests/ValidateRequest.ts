import Schema from 'validate'

import { ResponseErrorTrait } from '../Contracts/ResponseTrait'

export default (rules = {}) => (req, res, next): void => {
  const { body } = req
  const rule = new Schema(rules)
  const errors = rule.validate(body)

  if (errors) {
    const message = errors.map((error) => error.message)
    const errorMessage: ResponseErrorTrait = {
      status: false,
      data: null,
      message,
    }

    res.status(400).send(errorMessage)
  }

  next()
}
