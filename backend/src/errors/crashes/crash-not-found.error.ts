export class CrashNotFoundError extends Error {
  constructor() {
    super("Require crash was not found");
  }
}
