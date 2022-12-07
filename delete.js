const { User } = require('./models');

// DELETE DATA
User.destroy({ where: { id: 6 } }).then((result) => {
   console.log("Sukses delete");
}).catch((err) => {
   console.log("Gagal delete");
});