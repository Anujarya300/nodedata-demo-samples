
export class SecurityConfig {
    public static ResourceAccess: any = [];
}

export enum AuthenticationType {
    passwordBased = 1,
    TokenBased = 2
};

export enum AuthenticationEnabled {
    disabled = 1,
    enabledWithoutAuthorization = 2,
    enabledWithAuthorization = 3
};