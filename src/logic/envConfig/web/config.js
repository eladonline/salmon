const dev = require('./env/.env.dev')
const local = require('./env/.env.local')
const prod = require('./env/.env.prod')
let env = dev;

switch(process.env.NODE_ENV) {
  case 'development':
    env = dev;
    break;
  case 'production':
    env = prod;
    break;
  case 'local':
    env = local;
    break;
}

module.exports = env;
