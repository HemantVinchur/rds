let settings = {};

const DBConfig = {
    local: {
        port: 3002,
        mongo: {
            host: "localhost",
            port: 27017,
            database: "rds",
        },
    },
    dev: {
        port: 2002,
        mongo: {
            user: process.env.MONGO_USER ? process.env.MONGO_USER : "admin",
            password: process.env.MONGO_PASS ? process.env.MONGO_PASS : "Q%LfM#WxynMa",
            host: "localhost",
            port: 27017,
            database: process.env.MONGO_DBNAME_DEV ? process.env.MONGO_DBNAME_DEV : "rds"
        },

    },

    /* test:{
         port:4000,
         mongo:{
             user: process.env.MONGO_USER ? process.env.MONGO_USER:"test-server",
             password: process.env.MONGO_PASS ? process.env.MONGO_PASS :"Sh0IysVWhYLcjxyz",
             host:"localhost",
             port:27017,
             database:process.env.MONGO_DBNAME_DEV ? process.env.MONGO_DBNAME_DEV:"test-mongo"
         },
         secret:'s3cr3t'
     },*/
}

switch (process.env.NODE_TLS_REJECT_UNAUTHORIZED='0') {
    case "dev":
        let dev = DBConfig.dev;
        DBConfig.dev.URI = `mongodb://${dev.mongo.user}:${dev.mongo.password}@${dev.mongo.host}:${dev.mongo.port}/${dev.mongo.database}`
        settings = DBConfig.dev
        break;

    default:
        let local = DBConfig.local;
        DBConfig.local.URI = `mongodb://${local.mongo.host}:${local.mongo.port}/${local.mongo.database}`;
        settings = DBConfig.local;
        break;
}


module.exports = settings;