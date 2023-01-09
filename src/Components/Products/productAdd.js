import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import CategoryRepository from "../../repositories/categoryRepository";
import ManufacturerRepository from "../../repositories/manufacturerRepository";

const ProductAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = useState({
        name: "",
        description:"",
        quantity: 0,
        manufacturer: "",
        category:""
    })


    const [categories, setCategories] = useState([]);

    const [manufacturers, setManufacturers] = useState([]);

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
        fetchCategories()
    }, []);

    useEffect(() => {
       fetchManufacturers()
    }, []);


    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const updateCategory = (e) => {
        let value = e.target.value
        console.log(value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const description = formData.description;
        const quantity = formData.quantity;
        const category = [{"name":formData.category}]
        const manufacturer = formData.manufacturer;

        console.log(category)
        props.addProduct(name, description, quantity, category, manufacturer);
        history.push("/products");
    }

    return(
        <div className="row mt-5 m-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group m-3">
                        <label htmlFor="name">Product name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter product name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="description">Description</label>
                        <input type="text"
                               className="form-control"
                               id="description"
                               name="description"
                               placeholder="Description"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number"
                               className="form-control"
                               id="quantity"
                               name="quantity"
                               placeholder="Quantity"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-3">
                        <label>Category</label>
                        <select name="category"  className="form-control" onChange={handleChange}>
                            <option value=""/>
                            {categories && categories.map((term) =>
                                <option key={term.name} value={term.name}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group m-3">
                        <label>Manufacturer</label>
                        <select name="manufacturer" className="form-control" onChange={handleChange}>
                            <option value=""/>
                            {manufacturers && manufacturers.map((term) =>
                                <option key={term.name} value={term.name}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary m-3">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductAdd;
