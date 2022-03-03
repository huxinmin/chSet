(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Joi = require('joi');
    function validateConfig(config) {
        var schema = Joi.object({
            ignore: Joi.array().items(Joi.string()),
            encoding: Joi.string(),
            src: Joi.array().items(Joi.string()).required(),
            test: Joi.alternatives().try(Joi.string(), Joi.object().regex()).required(),
            transform: Joi.function().required()
        });
        var validate = schema.validate(config);
        if (validate === null || validate === void 0 ? void 0 : validate.error) {
            //@ts-ignore
            throw new Error(validate === null || validate === void 0 ? void 0 : validate.error);
        }
    }
    exports.default = validateConfig;
});
