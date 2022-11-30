const mongoose = require("mongoose");


const ProduktiSchema = new mongoose.Schema({
    //Attels: {
    //    type: String,
    //    required: true,
    //},
    Nosaukums: {    
        type: String,
        required: true,
    },
    Apraksts: {
        type: String,
        required: true,
    },
    Krasa: {
        type: String,
        required: true,
    },
    Cena: {
        type: Number,
        required: true,
    },
})

const Produkti = mongoose.model("produkti", ProduktiSchema);

module.exports = Produkti;