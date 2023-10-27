const Carts = require('../models/cart.model');
const Products = require('../models/product.model');


class CartsDao {
    async getById(idC) {
        try{
            console.log(idC);
            let cart = await Carts.find({_id:idC});
            return cart
        }catch(error){
            console.log ("No se pudo traer el carrito " + error)
        }
    }

    async createCart(product) {
        try{ 
            const newCart = await Carts.create(product);
            return newCart._id
        }catch(error){
            console.log ("No se pudo crear el carrito " + error)
        }
    }

    async post (idC, idP) {
        try{
            // Busco que ambos existan, carrito y producto.
            // Busco el carrito
            // Busco el producto dentro de products en el carrito.
            // Si existe le aumento la cantidad sino agrego el id del producto y la cantidad en 1.
            let quantity = 1; 
            let product = await Products.find({_id:idP});
            if (!product) {
                return {error: 'El producto no existe.'};
            }
            let cart = await Carts.find({_id: idC});
            let productsCart = cart[0].products;
            console.log(productsCart);
            if (!cart) {
                return {error: 'El carrito no existe.'};
            }else{
                //Buscamos si el carrito tiene productos.
                if((productsCart).length===0){
                    console.log("Carrito vacio");
                    let carts = await Carts.updateOne({_id: idC}, {$set:{products: {product: idP, quantity:1}}});
                    return carts
                }else{
                    console.log("Carrito con productos");
                    let carts = await Carts.updateOne({_id: idC, products: {$elemMatch: {product: {$eq:idP}}}}, {$inc:{"products.$.quantity":quantity}});
                    if(carts.matchedCount===0){
                        let newProduct = [{ "product":idP, "quantity":quantity}]
                        let carts = await Carts.updateOne({_id: idC}, {$push:{products:{$each:newProduct}}});
                        return carts
                    }
                    return carts    
                } 
            }
        }catch(error){
            console.log ("No se pudo agregar el producto al carrito " + error)
        }    
    }
}

module.exports = CartsDao;