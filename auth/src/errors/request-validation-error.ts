import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public reasons: ValidationError[]) {
    super("Validation Error");
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.reasons.map((e) => ({
      message: e.msg,
      field: e.param,
    }));
  }
}
