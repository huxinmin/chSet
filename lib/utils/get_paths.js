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
    var glob = require("glob");
    function getPaths(patterns, config) {
        var ignore = config.ignore;
        var cfg = Object.assign({ ignore: ignore }, { nodir: true });
        var paths = patterns.map(function (pattern) { return glob.sync(pattern, cfg); });
        return [].concat.apply([], paths);
    }
    ;
    exports.default = getPaths;
});
