import {useEffect, useState} from "react";
import ManufacturerRepository from "../../repositories/manufacturerRepository";
import React from "react";


const Manufacturer = () => {

    const [manufacturers, setManufacturers] = useState([]);


    useEffect(() => {
        ManufacturerRepository.fetchOrderedManufacturers()
            .then((data) => setManufacturers(data.data))
    }, []);


    return (
        <div className={"container mm-4 mt-5"}>
            {manufacturers &&
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Total</th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                manufacturers && manufacturers.map(item =>
                                    <tr key={item.name}>
                                        <td>{item.name}</td>
                                        <td>{item.total}</td>
                                    </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>


    )
}

export default Manufacturer