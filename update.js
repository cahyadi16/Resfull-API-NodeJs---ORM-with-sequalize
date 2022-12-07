const { User } = require('./models');

// UPDATE DATA
const data = {
   firstName: 'Muhammad',
   lastName: 'Nurmahmudin',
   email: 'mnurmahmudin@gmail.com'
}

User.update(data, { where: { id: 7 }}).then((result) => {
   console.log("Sukses Update");
}).catch((err) => {
   console.log("Gagal Update");
});