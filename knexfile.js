const { DB_URL, DB_USER, DB_PASSWORD, NODE_ENV = 'development' } = process.env;

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};

const customConfig = {
  production: {
    connection: {
      connectionString: DB_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  development: {
    connection: {
      user: 'lee',
      password: 'password',
      database: 'ontap_dev',
    },
  },
  test: {
    connection: {
      user: 'lee',
      password: 'password',
      database: 'ontap_test',
    },
  },
};

module.exports = { ...customConfig[NODE_ENV], ...baseConfig };
