const mongoose = require('mongoose');

const cartCollection = 'cart';
const cartSchema= new mongoose.Schema({
    products: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "products",
        },
        quantity: {
          type: Number
        },
      }
    ],
    timestamp: {
        type: Date, // Utiliza el tipo de dato Date para almacenar la fecha y hora
        default: Date.now, // Establece la fecha y hora actual por defecto
    },
  }
)

const Carts = mongoose.model(cartCollection,cartSchema);
module.exports = Carts;