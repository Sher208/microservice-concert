import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  reasons = "Error connecting to Database";
  statusCode = 500;

  constructor() {
    super("Database connection Error");
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reasons }];
  }
}
