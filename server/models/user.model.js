const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
      //  required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
      //  required: 'Email can\'t be empty',
      //  unique: true
    },
    adresse: {
        type: String,
        //required: 'Adress can\'t be empty',
      //  unique: true
    },
    tel: {
        type: Number,
      //  required: 'tel can\'t be empty',
      //  unique: true
    },
    isActive: {
        type: Boolean,


    },
    password: {
        type: String,
      //  required: 'Password can\'t be empty',
      //  minlength : [4,'Password must be atleast 4 character long']
    },
    isVendeur: {
        type: String,

    },
    idVendeur: {
        type: String,

    },
    isAdmin: {
        type: String,

    },
    idAdmin: {
        type: String,

    },
    entreprise: {
        type: String,

    },
    photoprofile: {
        type: String,

    },
    photocouverture: {
        type: String,

    },
    aboutme:{
      type:String,
    },
    saltSecret: String
});

// Custom validation for email
// userSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

// Events
// userSchema.pre('save', function (next) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(this.password, salt, (err, hash) => {
//             this.password = hash;
//             this.saltSecret = salt;
//             next();
//         });
//     });
// });

const User = mongoose.model('User', userSchema);
module.exports = User ;
