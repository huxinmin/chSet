(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./utils/get_paths", "./utils/parse_config", "./utils/replace"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var get_paths_1 = require("./utils/get_paths");
    var parse_config_1 = require("./utils/parse_config");
    var replace_1 = require("./utils/replace");
    function chSet(config) {
        var pasrsedConfig = (0, parse_config_1.default)(config);
        var files = pasrsedConfig.files, test = pasrsedConfig.test, transform = pasrsedConfig.transform;
        var paths = (0, get_paths_1.default)(files, pasrsedConfig);
        return paths.map(function (path) { return (0, replace_1.default)({
            //@ts-ignore
            file: path,
            test: test,
            transform: transform,
            config: config
        }); });
    }
    exports.default = chSet;
});
