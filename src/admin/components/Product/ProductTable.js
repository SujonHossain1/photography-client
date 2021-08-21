/* eslint-disable prettier/prettier */

import { Table } from 'react-bootstrap';

const ProductTable = ({ products }) => {

    return (
        <div className="pt-4">
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}  >
                            <td>1</td>
                            <td> {product.name} </td>
                            <td> {product.price} </td>
                            <td> {product.quantity} </td>
                            <td>  test </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


        </div >
    );
};

export default ProductTable;
