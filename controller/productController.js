import Product from '../model/productModel.js';

export const createProduct = async (req,res) => {
    try {
        const product = new Product(req.body);
        const newProduct = await product.save()
        console.log("Producto Creado Correctamente", newProduct);
        return res.status(201).json({
            message: "Producto creado correctamente",
            product: newProduct,
        });
    } catch (error) {
        console.error("Error al crear el producto", error);
        return res.status(500).json({
            message: "Error al crear el producto",
            error: error.message
        })
    }
}

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find();
        if(products.length === 0) {
            return res.status(404).json({
                message: "No se encontraron productos"
            })
        }else {
            return res.status(200).json({
                message: "Productos encontrados",
                products,
            });
        }
            
    } catch (error) {
        console.error("Error al obtener los productos", error);
        return res.status(500).json({
            message: "Error al obtener los productos",
            error: error.message
        });
    }
} 

export const updateProduct = async (req,res) => {
 try {
    const id = req.params.id;
    const updatedData = req.body;
    if(!id) {
        return res.status(400).json({
            message: "El id es requerido"
        })
    }
    const product = await Product.findByIdAndUpdate(id, updatedData, {new: true});
    if(!product) {
        return res.status(404).json({
            message: "Producto no encontrado"
        })
    }else {
        return res.status(200).json({
            message: "Producto actualizado",
            product,
        });
    }

 } catch (error) {
    console.error("Error al actualizar el producto", error);
    return res.status(500).json({
        message: "Error al actualizar el producto",
        error: error.message
    });
 }   
}

export const deleteProduct = async (req,res) => {
    try {
        const id = req.params.id;   
        const product = await product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({
                message: "Producto no encontrado"
            })
        }else {
            return res.status(200).json({
                message: "Producto eliminado",
                product,
            });
        }
    } catch (error) {
        console.error("Error al eliminar el producto", error);
        return res.status(500).json({
            message: "Error al eliminar el producto",
            error: error.message
        });
    }
}