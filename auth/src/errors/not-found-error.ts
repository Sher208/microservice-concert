import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  reasons = "Not Found";
  statusCode = 404;

  constructor() {
    super("Not Found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reasons }];
  }
}
