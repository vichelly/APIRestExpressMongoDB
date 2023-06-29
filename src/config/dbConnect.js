import mongoose from "mongoose" 

mongoose.connect("mongodb+srv://admin:123@cluster0.fsnxec2.mongodb.net/alura-node");

let db = mongoose.connection;

export default db