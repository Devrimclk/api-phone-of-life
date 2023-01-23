// eslint-disable-next-line @typescript-eslint/no-var-requires
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require( __dirname + '/../../config/config.json')[env];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let sequelize: any = null;
if(config.use_env_variable){
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
export default sequelize;
 