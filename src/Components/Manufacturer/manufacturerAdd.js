import React  from 'react'
import {useState} from 'react'

const ManufacturerAdd = (props) => {

    const [formData, updateFormData] = useState({
        name: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;

        props.addManufacturer(name);
    }

    return(
        <div className="row mt-5 m-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group m-3">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary m-3">Add manufacturer</button>
                </form>
            </div>
        </div>
    )
}

export default ManufacturerAdd;
