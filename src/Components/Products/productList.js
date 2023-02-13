import Product from "./product";
import {Link} from "react-router-dom";


const ProductList = (props) => {


    return (
        <div>
            {props.products &&
                <div className={"container mm-4 mt-5"}>
                    <div className={"row"}>
                        <div className={"table-responsive"}>
                            <table className={"table table-striped"}>
                                <thead>
                                <tr>
                                    <th scope={"col"}>Name</th>
                                    <th scope={"col"}>Price</th>
                                    <th scope={"col"}>Quantity</th>
                                    <th scope={"col"}>Category</th>
                                    <th scope={"col"}>Manufacturer</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                  props.products &&  props.products.map(item =>
                                        <Product   onDelete={props.deleteProduct} key={item.product.id} product={item}/>)
                                }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            }
            <div className="col mb-3">
                <div className="row">
                    <div className="col-sm-12 col-md-12 m-5">
                        <Link className={"btn btn-block btn-dark"} to={"/products/add"}>Add new
                            product</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;



