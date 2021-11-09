import React from "react";
import './index.css';
import './responsive.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-buy-vouchers'>
                <ShoppingCartIcon />
                <p className='navbar-p'>COMPRAR VOUCHERS</p>
            </div>
            <div className='navbar-see-vouchers'>
                <InventoryIcon />
                <p className='navbar-p'>CONSULTAR VOUCHERS</p>
            </div>
        </div>
    )
}

export default Navbar;