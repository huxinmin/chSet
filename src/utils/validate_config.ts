import type { IConfig } from '../types';
const Ajv = require('ajv')

function validateConfig (config:IConfig) {
  const ajv = new Ajv();
  const schema = {
    type: "object",
    properties: {
      ignore: { type: "integer" },
      encoding: { type: "string" },
      files: {
        type: "array",
        items: {
          type: "string"
        }
      },
      test:{ type: "object" },
      //TODO function validate
      // transform: {type: "string" }
    },
    required: ["files", "test", "transform"],
    additionalProperties: true,
  }

  const validate = ajv.compile(schema)

  if (!validate(config)) {
    const error = validate.errors[0];
    //@ts-ignore
    throw new Error(error?.instancePath + ':' + error?.message);
  }
}

export default validateConfig