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
    function doReplace(_a) {
        var contents = _a.contents, test = _a.test, transform = _a.transform, file = _a.file;
        var result = { file: file, hasChanged: false };
        var newContents = test.reduce(function (totalContents, item) {
            var matches = contents.match(item);
            if (matches === null || matches === void 0 ? void 0 : matches.length)
                result.hasChanged = true;
            matches === null || matches === void 0 ? void 0 : matches.forEach(function (matchText) {
                totalContents = totalContents.replace(item, transform(matchText));
            });
            return totalContents;
        }, contents);
        return { result: result, newContents: newContents };
    }
    ;
    exports.default = doReplace;
});
