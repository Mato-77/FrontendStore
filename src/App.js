import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Switch,Route} from "react-router-dom";
import ProductList from "./Components/Products/productList";
import ProductRepository from "./repositories/productRepository";
import {useEffect, useState} from "react";
import ProductAdd from "./Components/Products/productAdd";
import Header from "./Components/Header/header";
import ProductEdit from "./Components/Products/productEdit";
import Category from "./Components/Categories/Category";
import Manufacturer from "./Components/Manufacturer/Manufacturer";



function App() {



    const [products,setProducts] = useState(null);

    useEffect(() => {
        loadProducts()
    }, []);

    const loadProducts = () =>{
        ProductRepository.fetchProducts()
            .then((data) => {
                setProducts(data.data)

            })
    };

    const deleteProduct = (id) => {
        ProductRepository.deleteProduct(id)
            .then((data) => {
             loadProducts()
            })
    };

    const addProduct = (name, description, quantity, categories, manufacturer) => {
        ProductRepository.addProduct(name,description,quantity,manufacturer,categories)
            .then((data) => {
              loadProducts()
            })
    }
    const editProduct = (id,name, description, quantity, categories, manufacturer) => {
        ProductRepository.editProduct(id,name,description,quantity,manufacturer,categories).
           then(data => {
               loadProducts()
           })
    }


  return (
      <BrowserRouter>
          <Header/>
        <Switch>

          <Route path={"/products/edit/:id"} exact><ProductEdit onEditProduct={editProduct}/></Route>
          <Route path={"/products/add" } exact><ProductAdd addProduct={addProduct}/></Route>
          <Route path={"/products"} exact><ProductList products={products} deleteProduct={deleteProduct}
                                                        /></Route>
          <Route path={"/categories" } exact><Category/></Route>
          <Route path={"/manufacturers"} exact><Manufacturer/></Route>

        </Switch>
      </BrowserRouter>

  );
}

export default App;
