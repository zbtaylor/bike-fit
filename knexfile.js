// Update with your config settings.
try {
  require("dotenv").config();
} catch {
  // do nothing
}

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_DEV_URL,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    ssl: { rejectUnauthorized: false },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
