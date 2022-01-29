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
    var Ajv = require('ajv');
    function validateConfig(config) {
        var ajv = new Ajv();
        var schema = {
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
                test: { type: "object" },
                //TODO function validate
                // transform: {type: "string" }
            },
            required: ["files", "test", "transform"],
            additionalProperties: true,
        };
        var validate = ajv.compile(schema);
        if (!validate(config)) {
            var error = validate.errors[0];
            //@ts-ignore
            throw new Error((error === null || error === void 0 ? void 0 : error.instancePath) + ':' + (error === null || error === void 0 ? void 0 : error.message));
        }
    }
    exports.default = validateConfig;
});
