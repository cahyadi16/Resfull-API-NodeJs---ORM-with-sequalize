const { User } = require('./models');

// READ DATA
User.findAll().then((result) => {
   // console.log(result); // --> mencetak semua data
   result.forEach((data) => {
      console.log(`First Name : ${data.firstName}`);
      console.log(`First Last Name : ${data.lastName}`);
      console.log(`Email : ${data.email}`);
      console.log('============================================');
   })
}).catch((err) => {
   console.log(err);
})