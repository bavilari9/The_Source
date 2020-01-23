const pgp = require('pg-promise')(),
config = process.env.DATABASE_URL || 'postgres://oscardiaz@localhost:5432/imbdlat',
db= pgp(config);

module.exports = db;