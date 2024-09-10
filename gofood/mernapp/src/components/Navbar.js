import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Model from '../Model';
import Cart from './screens/Cart';
import { useCart } from './ContextReducer';

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(prevSubMenuOpen => !prevSubMenuOpen); // Toggle submenu visibility
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/">
          GoFood
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {localStorage.getItem('authToken') && (
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">
                  My Orders
                </Link>
              </li>
            )}
          </ul>
          {!localStorage.getItem('authToken') ? (
            <div className="d-flex mx-5">
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/creatuser">
                SignUp
              </Link>
            </div>
          ) : (
            <div className=" d-flex align-items-center" id="userdata">
              <div
                className="btn bg-white text-success mx-2"
                onClick={() => {
                  setCartView(true);
                }}
              >
                My Cart{' '}
                <Badge pill bg="danger">
                  {data.length}
                </Badge>
              </div>
              {cartView && (
                <Model onClose={() => setCartView(false)}>
                  <Cart />
                </Model>
              )}
              <div className="btn bg-white text-danger mx-2 " onClick={handleLogout}>
                LogOut
              </div>
              <div className="hero" style={{ zIndex: "9" }}>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
                  className="user-pic"
                  alt="user imag"
                  onClick={() => toggleSubMenu()}
                />
                {subMenuOpen && (
                  <div className="sub-menu-wrap" id="subMenu">
                    <div className="sub-menu">
                      <div className="user-info">
                        <img
                          src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
                          alt="usr"
                        />
                        <h3>Dnyanesh</h3>
                      </div>
                      <hr />
                      <Link href="#" className="sub-menu-link" to="/profile">
                        <img src="https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-edit-profile-icon-png-image_4101421.jpg" alt="e" />
                        <p>Edit Profile</p>
                        <span>:</span>
                      </Link>
                      <Link href="/" className="sub-menu-link" to="/">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="h" />
                        <p>Home</p>
                        <span>:</span>
                      </Link>
                      <Link href="#" className="sub-menu-link" onClick={() => { setCartView(true); }}>
                        <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="c" />
                        <p>Cart</p>
                        <span>:</span>
                      </Link>
                      <Link href="#" className="sub-menu-link" to="myOrder">
                        <img src="https://cdn-icons-png.flaticon.com/128/1008/1008010.png" alt="m" />
                        <p>My Orders</p>
                        <span>:</span>
                      </Link>
                      <Link href="" className="sub-menu-link">
                        <img src="https://png.pngtree.com/png-vector/20230824/ourmid/pngtree-line-art-food-products-icon-design-vector-png-image_6914965.png" alt="a" />
                        <p>All Products</p>
                        <span>:</span>
                      </Link>
                      <Link href="#" className="sub-menu-link" onClick={handleLogout}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kId1FkVNvBDbXg-hFv6qWZ-q7Acy8dtHlJ33KhKWBnpiY2rx9OxlCvgepIOudWs5w7Y&usqp=CAU" alt="L" />
                        <p>Logout</p>
                        <span>:</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
