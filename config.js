require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000
    },
    mysql: {
        host: process.env.MYSQL_HOST || "botero-db.cp4yeku0obx7.us-east-1.rds.amazonaws.com",
        port: process.env.MYSQL_PORT || 3306,
        user: process.env.MYSQL_USER || "admin",
        password: process.env.MYSQL_PASSWORD || "Admin123",
        database: process.env.MYSQL_DB || "BoteroDB"
    }
}