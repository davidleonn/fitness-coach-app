import { CustomError } from "../custom.error";

export class Bad_Payload_Error extends CustomError {
  constructor(
    statusCode: number = 412,
    reference: string = "bad_payload_error"
  ) {
    super(statusCode, reference);
  }
}
