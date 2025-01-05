import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String,
    Salary: String,
    Mobile: String,
    Address: String,
});

const dataModel = mongoose.model("signupdata", DataSchema);

export default dataModel;
