import React from 'react'
import Header from "./Header"
import {useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import {Link} from "react-router-dom";
import About from './About';
import Banner from './Banner';

const Home = () => {
    const {products} = useSelector(state => state.ProductsReducer);
    return (
        <div>
            <Header />
            <Banner/>
            <About/>
            
            <div>
                <h2 class="heading">Products</h2>
                <hr class="mx-auto"></hr>
            </div>
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product__img">
                                    <Link to={`/details/${product.id}`}><img src={`/images/${product.productImg}`} alt="something"/></Link>
                                </div>
                                <div className="product__name">
                                    {product.productName}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product__discount__price">
                                        Giá: {currencyFormatter.format(product.productPrice, { code: 'VND' })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Home
