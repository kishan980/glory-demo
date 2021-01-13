let appConfig = {};

// appConfig.port = 4848;
appConfig.port = process.env.PORT || 4848,
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    // uri: 'mongodb://localhost:27017/blogAppDB',
    uri:"mongodb+srv://kishan:yadav@cluster0.oluxo.mongodb.net/Demo?retryWrites=true&w=majority"
    // uri: 'mongodb://localhost:27017/DemoTest',
}
appConfig.apiVersion = '/api/v1';

module.exports = {

    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion

}// end module exports