import React, { useState } from "react";
import './index.css';
import './responsive.css';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Vouchers from "../../components/Vouchers";
import BuyVouchers from "../../components/BuyVoucher";

const Dashboard = () => {

    const [showVouchers, setShowVouchers] = useState(false);
    const [buyVouchers, setBuyVouchers] = useState(false);

    return (
        <section className='dashboard-container'>
            <Sidebar show={showVouchers} buy={buyVouchers} setShow={setShowVouchers} setBuy={setBuyVouchers}></Sidebar>
            <Header show={showVouchers} buy={buyVouchers}></Header>
            <Navbar show={showVouchers} buy={buyVouchers} setShow={setShowVouchers} setBuy={setBuyVouchers}></Navbar>
            <div className='dashboard-div'>
                {showVouchers && <Vouchers />}
                {buyVouchers && <BuyVouchers />}
            </div>
        </section>
    )
}

export default Dashboard;