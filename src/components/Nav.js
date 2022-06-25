import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";

const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <main>
        <nav className="nav">
            <div className="nav-text">
                <img src="/images/logo.png" alt="logo"/>
                <ul className="nav-menu menu-main">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="#">TIN TỨC</Link></li>
                    <li><Link to="#">GIỚI THIỆU</Link></li>
                    <li><Link to="#">LIÊN HỆ</Link></li>
                </ul>
                <Link>
                    <div className="navSearch">
                        <HiOutlineSearch className="iconSearch" />
                        <input type="text" placeholder = "Tìm kiếm ..."/>
                    </div>
                </Link>
                <Link to="/cart">
                    <div className="basket">
                        <AiOutlineShoppingCart className="cart-icon" />
                        <span>{totalQuantities}</span>
                    </div>
                </Link>
                <Link to="/login">
                    <div className="basket">
                        <BiUser className="cart-icon" />
                    </div>
                </Link>
            </div>
        </nav>
        </main>
    )
}

export default Nav
