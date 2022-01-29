(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./do_replace"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var do_replace_1 = require("./do_replace");
    var fs = require('fs');
    function replace(_a) {
        var file = _a.file, test = _a.test, transform = _a.transform, encoding = _a.encoding;
        var contents = fs.readFileSync(file, encoding).toString();
        var _b = (0, do_replace_1.default)({ contents: contents, test: test, transform: transform, file: file }), result = _b.result, newContents = _b.newContents;
        if (result.hasChanged) {
            fs.writeFileSync(file, newContents, encoding);
        }
        return result;
    }
    ;
    exports.default = replace;
});
