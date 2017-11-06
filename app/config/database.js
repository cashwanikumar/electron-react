const path = require('path');
const db_name = 'grocery';

function dbLocation(env) {
    return path.resolve(__dirname) + '/../../database_file/' + db_name + '_' + env + '.sqlite'
}

module.exports = {
    development: {
        username: null,
        password: null,
        database: db_name + '_dev',
        host: '127.0.0.1',
        dialect: 'sqlite',
        storage: dbLocation('dev')
    },
    test: {
        username: null,
        password: null,
        database: db_name + '_test',
        host: '127.0.0.1',
        dialect: 'sqlite',
        storage: dbLocation('test')
    },
    production: {
        username: null,
        password: null,
        database: db_name + '_prod',
        host: '127.0.0.1',
        dialect: 'sqlite',
        storage: dbLocation('prod')
    }
};