import { CustomError } from "../custom.error";

export class Not_Found_Error extends CustomError {
  constructor(statusCode: number = 404, reference: string = "not_found_error") {
    super(statusCode, reference);
  }
}
