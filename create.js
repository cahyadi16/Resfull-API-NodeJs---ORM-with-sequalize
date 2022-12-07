const { User } = require('./models');

// create user
const data = {
   firstName: 'Cah',
   lastName: 'Yadi',
   email: 'cahyadi@gmail.com'
}

// menjalankan ORM create dari data yang telah di definisikan
User.create(data).then((result) => {
   console.log("Sukses Insert");
}).catch((err) => {
   console.log("Gagal Insert");
});