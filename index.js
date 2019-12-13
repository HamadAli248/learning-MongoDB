const mongoose = require('mongoose');

const UserSchema= require('./models/user')

mongoose.connect(
    ` mongodb+srv://hamad:password1234@cluster0-331s7.mongodb.net/people?retryWrites=true&w=majority`,{
        useNewUrlParser:true
});

const user = new UserSchema({
    name:'diosdb',
    email:'ajdsibjksd@email.com',
    password:'jdsfkhidskajdbos'
});

user.save();
