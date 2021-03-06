const adminUser = require('./models/adminUser');
const mongoose = require('mongoose');

var adminuser = new adminUser({
    email: '*************',
    password: '**************',
    role: 'admin'
});

const email = "************";
const password = "************";
const role = "restricted";

const dbURI = '*******************';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(async (result) => {
    console.log('connection made!!');
    adminuser.save().then(function(){
        console.log("admin created suceesfully");
    });
    const adminuser_ = await adminUser.create({ email, password, role });
    console.log(adminuser_);
    })
  .catch((err) => console.log(err));



