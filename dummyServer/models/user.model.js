const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    lat: {type: String, required: true},
    lng: {type: String, required: true}
});

const AddressSchema = new Schema({
    street: {type: String, required: true},
    suite: {type: String, required: true},
    city: {type: String, required: true},
    zipcode: {type: String, required: true},
    geo: {type: GeoSchema, required: true}
});

const CompanySchema = new Schema({
    name: {type: String, required: true},
    catchPhrase: {type: String, required: true},
    bs: {type: String, required: true}
});

const UserSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: AddressSchema, required: true},
    phone: {type: String, required: true},
    website: {type: String, required: true},
    company: {type: CompanySchema, required: true}
});

module.exports = mongoose.model('User', UserSchema);
