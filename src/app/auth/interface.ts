export interface AuthState {
    authenticated: boolean;
    user: any;
}

export interface ISignInResponse {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string,
    token: string
}