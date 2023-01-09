import React from "react";
import {Link} from "react-router-dom";


const Product = (props) => {
    return(
                        <tr>
                            <td>{props.product.product.name}</td>
                            <td>{props.product.product.description}</td>
                            <td>{props.product.product.quantity}</td>

                            <td>{props.product.categories && props.product.categories.map(cat => <span key={cat.name}> {cat.name}</span>)}</td>
                            <td>{props.product.product.manufacturer.name}</td>
                            <td className={"text-right"}>
                                <a title={"Delete"} className={"btn btn-danger m-2"}
                                   onClick={() => props.onDelete(props.product.product.id)}>
                                    Delete
                                </a>
                                <Link className={"btn btn-info ml-2"}

                                      to={`/products/edit/${props.product.product.id}`}>
                                    Edit
                                </Link>
                            </td>

                        </tr>
        )}



export default Product
