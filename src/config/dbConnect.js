import mongoose from "mongoose";

const url = "mongodb+srv://henryworkdevti:database123@cluster0.xvorc8c.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url)
let db = mongoose.connection;

export default db;