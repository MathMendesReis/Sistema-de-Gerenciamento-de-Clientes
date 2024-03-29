"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const BaseError_1 = require("./BaseError");
class InternalServerError extends BaseError_1.BaseError {
    constructor(message = "Erro interno do servidor") {
        super(500, message);
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=InternalServerError.js.map