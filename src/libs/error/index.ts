/* eslint-disable max-classes-per-file */
export const errors = {
  400: { message: "Bad Request" },
  401: { message: "Unauthorized" },
  403: { message: "Forbidden" },
  404: { message: "Not Found" },
  500: { message: "Internal Server Error" },
  502: { message: "Bad Gateway" },
  503: { message: "Service Unavailable" },
  504: { message: "Gateway Timeout" },
} as const;

export type ErrorType = keyof typeof errors;
export type Errors = typeof errors;
export type ErrorsMessage = {
  [T in ErrorType]: Errors[T]["message"];
}[ErrorType];

export type Error = {
  status: ErrorType;
  message: ErrorsMessage;
};

export class HttpError extends Error {
  message: ErrorsMessage;
  constructor(public status: ErrorType) {
    super();
    this.message = errors[status].message;
    this.status = status;
  }

  throwMessage() {
    return { message: this.message, status: this.status };
  }
}

export class BadRequestError extends HttpError {
  constructor() {
    super(400);
  }
}

export class UnauthorizedError extends HttpError {
  constructor() {
    super(401);
  }
}

export class ForbiddenError extends HttpError {
  constructor() {
    super(403);
  }
}

export class NotFoundError extends HttpError {
  constructor() {
    super(404);
  }
}

export class InternalServerError extends HttpError {
  constructor() {
    super(500);
  }
}

export class BadGatewayError extends HttpError {
  constructor() {
    super(502);
  }
}

export class ServiceUnavailableError extends HttpError {
  constructor() {
    super(503);
  }
}

export class GatewayTimeoutError extends HttpError {
  constructor() {
    super(504);
  }
}
