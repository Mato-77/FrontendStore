import {useEffect, useState} from "react";
import CategoryRepository from "../../repositories/categoryRepository";
import React from "react";
import CategoryAdd from "./categoryAdd";


const Category = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
      CategoryRepository.fetchOrderedCategories()
          .then((data) => setCategories(data.data))
    }, []);

    const addCategory = (name) => {
        CategoryRepository.addCategory(name)
            .then((data) => setCategories( {
                categories: categories.push(data.data)
            }))


    }
    return (
        <div className={"container mm-4 mt-5"}>
            {categories &&
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
                                categories && categories.map(item =>
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
            <CategoryAdd addCategory={addCategory} />
                </div>


    )
}

export default Category