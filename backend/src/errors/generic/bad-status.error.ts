import { CustomError } from "../custom.error";

export class Bad_Status_Error extends CustomError {
  constructor(
    statusCode: number = 500,
    reference: string = "bad_status_error"
  ) {
    super(statusCode, reference);
  }
}
