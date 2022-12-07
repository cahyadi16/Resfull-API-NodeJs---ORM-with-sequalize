const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_orm', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

async function main() {
   try {
   await sequelize.authenticate();
   console.log('Connection has been established successfully.');
   } catch (error) {
   console.error('Unable to connect to the database:', error);
      }
}

main();