module.exports = ({ env }) => {
  if(env('NODE_ENV') === 'development'){
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            database: 'u921149670_portfolio_db',
            username: 'root',
            password: '',
          },
          options: {},
        },
      },
    }
  }else {
    return{
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'mysql',
            host: env('DATABASE_HOST'),
            port: env.int('DATABASE_PORT'),
            database: env('DATABASE_NAME'),
            username: env('DATABASE_USERNAME'),
            password: env('DATABASE_PASSWORD'),
          },
          options: {},
        },
      },
    }
  }
};
