interface IErrorContent {
  code: string;
  message: string;
}

interface BaseResponse<T> {
  statusCode: number;
  success: true;
  trackingId: string;
  timestamp: string;
  errors: Array<IErrorContent>;
  result: T;
}

export type { BaseResponse };
