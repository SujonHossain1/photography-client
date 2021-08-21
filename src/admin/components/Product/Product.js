/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../store/actions/admin.productAction';
import { getInitialData } from '../../../store/actions/initialDataAction';
import './Product.css';
import ProductTable from './ProductTable';

const Category = () => {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    const [productPictures, setProductPictures] = useState([]);
    const { products, message, error, loading } = useSelector((state) => state.product);

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setProduct((product) => ({
            ...product,
            [name]: value,
        }));
    };

    const handleProductPictures = (event) => {
        setProductPictures([...productPictures, event.target.files[0]]);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const form = new FormData();

        productPictures.forEach((picture) => {
            form.append('images', picture);
        });
        Object.keys(product).forEach((key) => {
            form.append(key, product[key]);
        });

        dispatch(addProduct(form));
        dispatch(getInitialData());
        setProduct({ name: '', price: '', description: '', slug: '' });
        event.target.reset();
    };

    return (
        <div>
            <div className="col-md-7">
                <div className="d-flex justify-content-between pt-3">
                    <div className="h4">Services</div>
                    <button className="submit__btn" type="button" onClick={() => setShow(true)}>
                        Add Service
                    </button>
                </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error} </p>}
            {message && <p style={{ color: 'green' }}>{message} </p>}
            {show && (
                <div className="col-md-7 py-3">
                    <form onSubmit={submitHandler}>
                        <div className="input__group">
                            <label htmlFor=""> Service Name* </label>
                            <input
                                type="text"
                                name="name"
                                id=""
                                placeholder="Service Name"
                                onChange={inputHandler}
                                defaultValue={product.name}
                            />
                        </div>
                        <div className="input__group">
                            <label htmlFor=""> Price * </label>
                            <input
                                type="text"
                                name="price"
                                id=""
                                placeholder="Price"
                                onChange={inputHandler}
                                defaultValue={product.price}
                            />
                        </div>

                        <div className="input__group">
                            <label htmlFor=""> description * </label>
                            <input
                                type="text"
                                name="description"
                                id=""
                                placeholder="Description"
                                onChange={inputHandler}
                                defaultValue={product.description}
                            />
                        </div>
                        <div className="input__group">
                            {productPictures.length > 0 &&
                                productPictures.map((file, index) => (
                                    <div style={{ color: '#000' }} key={file.name}>
                                        {file.name}{' '}
                                    </div>
                                ))}
                            <label htmlFor=""> Image * </label>
                            <input
                                type="file"
                                id=""
                                name="productPicture"
                                onChange={handleProductPictures}
                            />
                        </div>
                        <div className="input__group">
                            <label htmlFor="">Slug *</label>
                            <input
                                type="text"
                                name="slug"
                                id=""
                                placeholder="Slug"
                                onChange={inputHandler}
                                defaultValue={product.slug}
                            />
                        </div>

                        <div className="input__group">
                            <button
                                type="button"
                                className="cancel__btn"
                                onClick={() => setShow(false)}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="submit__btn">
                                {loading ? 'Loading...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <ProductTable products={products} />
        </div>
    );
};

export default Category;
