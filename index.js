const { Sequelize } = require('sequelize');

// inisialisasi untuk pengamambilan query
const { QueryTypes } = require('sequelize');

// melakukan koneksi
const sequelize = new Sequelize('node_orm', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

async function main() {
   // pengecekan test koneksi
   try {
   await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      
      // melakukan query langsung ke database
      const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });
      // We didn't need to destructure the result here - the results were returned directly
      console.log(users);

      // kalau error
   } catch (error) {
   console.error('Unable to connect to the database:', error);
      }
}

main();