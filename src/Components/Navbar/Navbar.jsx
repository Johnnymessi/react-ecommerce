import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            {/* logo */}
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>MKEY</p>
            </div>
            {/* nav-menu */}
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>CỬA HÀNG</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>

                <li onClick={() => { setMenu("mens") }}>
                    <Link style={{ textDecoration: 'none' }} to='/mens'>NAM</Link>
                    {menu === "mens" ? <hr /> : <></>}
                </li>

                <li onClick={() => { setMenu("womens") }}>
                    <Link style={{ textDecoration: 'none' }} to='/womens'>NỮ</Link>
                    {menu === "womens" ? <hr /> : <></>}
                </li>

                <li onClick={() => { setMenu("kids") }}>
                    <Link style={{ textDecoration: 'none' }} to='/kids'>TRẺ EM</Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            {/* nav-login */}
            <div className="nav-login-cart">
                <Link to='/login'>
                    <button>ĐĂNG NHẬP</button>
                </Link>

                <Link to='/cart'>
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>

        </div>
    )
}

export default Navbar