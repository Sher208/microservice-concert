import { CustomError } from "./custom-error";

export class ValidationError extends CustomError {
  statusCode: number = 400;

  constructor(public reasons: string) {
    super(reasons);
    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.reasons }];
  }
}
