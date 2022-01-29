(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../constants", "./validate_config"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var constants_1 = require("../constants");
    var validate_config_1 = require("./validate_config");
    function parseConfig(config) {
        (0, validate_config_1.default)(config);
        if (!Array.isArray(config.test)) {
            config.test = [config.test];
        }
        return Object.assign({}, constants_1.defaultsConfig, config);
    }
    ;
    exports.default = parseConfig;
});
