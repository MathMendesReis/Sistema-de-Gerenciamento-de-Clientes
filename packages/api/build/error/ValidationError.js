"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const BaseError_1 = require("./BaseError");
class ValidationError extends BaseError_1.BaseError {
    constructor(message = "Erro de validação") {
        super(422, message);
    }
}
exports.ValidationError = ValidationError;
//# sourceMappingURL=ValidationError.js.map