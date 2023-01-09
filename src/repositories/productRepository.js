import Instance from "../axios/axios";

const productRepository = {


    findProductById: (id) =>{
        return Instance.get(`/products/${id}`)
    }
    ,
    fetchProducts : () =>{
        return Instance.get("/products")
    },
    addProduct: (name,description, quantity,manufacturerName,categoriesNames) => {
        console.log(name, description, quantity, manufacturerName, categoriesNames)
        return Instance.post("/products/save",{
            "name":name,
            "description":description,
            "quantity":quantity,
            "manufacturerName": manufacturerName,
            "categoriesNames": categoriesNames
        })
    },
    editProduct: (id,name,description, quantity,manufacturerName,categoriesNames) => {
        console.log(id,name, description, quantity, manufacturerName, categoriesNames)

        return Instance.put(`/products/edit/${id}`,{
            "id":id,
            "name":name,
            "description":description,
            "quantity":quantity,
            "manufacturerName": manufacturerName,
            "categoriesNames": categoriesNames
        })
    },
    deleteProduct:(id) => {
        return Instance.delete(`/products/delete/${id}`)
    }

}

export default productRepository;