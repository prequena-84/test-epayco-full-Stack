type TUri = string;
type TMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
type THeaders = Record<string, string>;
type TToken = string;

interface IFetchResponse<T> {
  data: T | null;
  message: string;
};

export type {
    TUri,
    TMethod,
    THeaders,
    TToken,
    IFetchResponse,
};