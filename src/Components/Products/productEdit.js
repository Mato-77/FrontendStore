import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import CategoryRepository from "../../repositories/categoryRepository";
import ManufacturerRepository from "../../repositories/manufacturerRepository";
import ProductRepository from "../../repositories/productRepository";
import data from "bootstrap/js/src/dom/data";

const ProductEdit = (props) => {

    const [categories, setCategories] = useState([]);

    const [manufacturers, setManufacturers] = useState([]);

    const [product,setProduct] = useState(null);

    const id = useParams().id;

    const fetchProduct = () =>{
        ProductRepository.findProductById(id)
            .then((data) => {
                setProduct(data.data)
            })
    }

    const fetchCategories = () => {
        CategoryRepository.fetchCategories()
            .then((data) => {
                setCategories(data.data)
            })
    }
    const fetchManufacturers = () => {
        ManufacturerRepository.fetchManufacturers()
            .then((data) => {
                setManufacturers(data.data)
            })
    }

    useEffect(() => {
        fetchProduct()
    },[])

    useEffect(() => {
        fetchCategories()
    }, []);

    useEffect(() => {
        fetchManufacturers()
    }, []);

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        description: "",
        quantity: 0,
        category:[],
        manufacturer: ""
    })






    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData.manufacturer)
        const name = formData.name !== "" ? formData.name : product.product.name;
        const description = formData.description !== "" ? formData.description : product.product.description;
        const quantity = formData.quantity !== 0 ? formData.quantity : product.product.quantity;
        const category = product.categories.length !== 0 ? product.categories : category ;
        const manufacturer = formData.manufacturer !== "" ? formData.manufacturer : product.product.manufacturer.name;

        props.onEditProduct(product.product.id, name, description, quantity, category, manufacturer);
        history.push("/products");
    }

    return(
        <div className="row mt-5">
            {product &&
                <div className="col-md-5">
                    <form onSubmit={onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Product name</label>
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   placeholder={product.product.name}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Description</label>
                            <input type="text"
                                   className="form-control"
                                   id="description"
                                   name="description"
                                   placeholder={product.product.description}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number"
                                   className="form-control"
                                   id="quantity"
                                   name="quantity"
                                   placeholder={product.product.quantity}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select name="category" multiple={true} disabled={true} className="form-control" onChange={handleChange}>
                                <option value={""}/>
                                {categories && categories.map((term) => {
                                    if (product.categories !== undefined &&
                                        product.categories.indexOf(term) !== -1)
                                        return <option key={term.name} selected={true} value={term.name}>{term.name}</option>
                                    else return <option key={term.name}  value={term.name}>{term.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Manufacturer</label>
                            <select name="manufacturer" className="form-control" onChange={handleChange}>
                                <option value={""}/>
                                {manufacturers && manufacturers.map((term) => {
                                    if (product.product.manufacturer !== undefined &&
                                        product.product.manufacturer.name === term.name)
                                        return <option key={term.name} selected={true} value={term.name}>{term.name}</option>
                                    else return <option key={term.name} value={term.name}>{term.name}</option>
                                })}
                            </select>
                        </div>
                        <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default ProductEdit;
