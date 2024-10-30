"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Format = void 0;
var Format;
(function (Format) {
    Format["PRINT"] = "print";
    Format["PDF"] = "pdf";
    Format["EBOOK"] = "Ebook";
    Format["AUDIOBOOK"] = "AudioBook";
})(Format || (exports.Format = Format = {}));
var Status;
(function (Status) {
    Status["READED"] = "Read";
    Status["RE_READED"] = "Re-read";
    Status["CURRENT"] = "Currently reading";
    Status["UNREAD"] = "Unread";
    Status["WANTED"] = "Want to read";
})(Status || (exports.Status = Status = {}));
