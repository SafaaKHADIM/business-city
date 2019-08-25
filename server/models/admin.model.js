const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var adminSchema = new mongoose.Schema({
    codeActivation: {
        type: String,

    }
});


const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin ;
