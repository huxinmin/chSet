import type { IConfig } from '../types';
const Joi = require('joi');

function validateConfig (config:IConfig) {
  const schema = Joi.object({
    ignore: Joi.array().items(Joi.string()),
    encoding: Joi.string(),
    src: Joi.array().items(Joi.string()).required(),
    test: Joi.alternatives().try(Joi.string(), Joi.object().regex()).required(),
    transform: Joi.function().required()
  });

  const validate = schema.validate(config);

  if (validate?.error) {
    //@ts-ignore
    throw new Error(validate?.error);
  }
}

export default validateConfig