require('dotenv').config();

module.exports={
    app:{
        port: process.env.PORT || 4000
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'viaduct.proxy.rlwy.net',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'RVnlJWcAvSamyUKKsCUnJLqeGcPeKcFr',
        database: process.env.MYSQL_DB || 'railway'
    }
}