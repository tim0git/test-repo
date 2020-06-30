const { DB_URL, NODE_ENV = 'development' } = process.env;

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};

const customConfig = {
  production: {
    connection: {
      connectionString: DB_URL,
      ssl: {
        rejectUnauthorized: false
      }
    }
  },
  development: {
    connection: {
      database: 'ontap_dev'
    }
  },
  test: {
    connection: {
      database: 'ontap_test'
    }
  }
};

module.exports = { ...customConfig[NODE_ENV], ...baseConfig };
