import mongoose from 'mongoose'

const livroSchema = new mongoose.Schema({
    id:{type: String},
    titulo:{type: String, require: true}
});