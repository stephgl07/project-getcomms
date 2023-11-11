import { HttpException, HttpStatus } from '@nestjs/common';

export class GitHubApiException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class GitHubNotFoundException extends HttpException {
  constructor() {
    super('Github resource not found', HttpStatus.NOT_FOUND);
  }
}

export class GitHubUnprocessableEntityException extends HttpException {
  constructor() {
    super('Unprocessable GitHub resource', HttpStatus.UNPROCESSABLE_ENTITY);
  }
}

export class GitHubRateLimitException extends HttpException {
  constructor() {
    super(
      'GitHub API request limit has been reached',
      HttpStatus.TOO_MANY_REQUESTS,
    );
  }
}
