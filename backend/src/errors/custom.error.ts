export class CustomError extends Error {
  statusCode: number;
  reference: string;

  constructor(statusCode: number, reference: string) {
    super(reference);
    this.statusCode = statusCode;
    this.reference = reference;
    this.message = reference;
  }
}
