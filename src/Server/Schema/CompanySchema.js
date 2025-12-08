const mongoose = require('../utils/mongoDB');

const CompanySchema = new mongoose.Schema({
    companyId: mongoose.Schema.Types.ObjectId,
    name : String,
    userid: String,
    password: String,
    contracts : String,
    mayorSponsored: String,
    dep_Associated: String,
    emailId: String,
    budget: Number    
});

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;