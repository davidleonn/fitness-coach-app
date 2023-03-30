import { CustomError } from "../custom.error";

export class UncontrolledError extends CustomError {
  constructor() {
    super(500, "uncontrolled_error");
  }
}
