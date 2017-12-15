
let DbConnectionOptions = { server: { poolSize: 20, domainsEnabled: true } };

export class Config {
    public static DbConnection: string = "mongodb://localhost:27017/demo_nodedata";
    public static DbConnectionOptions = DbConnectionOptions;
    public static basePath: string = "data";
    public static apiversion: string = "v1";
    public static ignorePaths = ['server.js'];
    public static internalIgnorePaths = ['gulpfile.js'];
}

export class Security {
    public static isAutheticationEnabled = "disabled";//allowed values: "disabled","enabledWithoutAuthorization","enabledWithAuthorization"
    public static authenticationType = "TokenBased";//allowed values: "passwordBased","TokenBased"
    public static useFaceBookAuth = false;
}
