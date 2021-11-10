import React, { useState } from "react";
import './index.css';
import './responsive.css';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import SeeVoucher from "../../components/SeeVoucher";
import BuyVouchers from "../../components/BuyVoucher";
import PayVoucher from "../../components/PayVoucher";

const Dashboard = () => {

    const [showVouchers, setShowVouchers] = useState(false);
    const [buyVouchers, setBuyVouchers] = useState(false);
    const [payVouchers, setPayVouchers] = useState(false);

    return (
        <section className='dashboard-container'>
            <Sidebar
                show={showVouchers}
                pay={payVouchers}
                buy={buyVouchers}
                setShow={setShowVouchers}
                setBuy={setBuyVouchers}
            ></Sidebar>
            <Header
                show={showVouchers}
                setPay={setPayVouchers}
                pay={payVouchers}
                setBuy={setBuyVouchers}
                buy={buyVouchers}
            ></Header>
            <Navbar
                show={showVouchers}
                pay={payVouchers}
                buy={buyVouchers}
                setShow={setShowVouchers}
                setBuy={setBuyVouchers}
            ></Navbar>
            {showVouchers && <h1 className='dashboard-h1'>Consulta de voucher</h1>}
            {buyVouchers && <h1 className='dashboard-h1'>Compra de voucher</h1>}
            {payVouchers && <h1 className='dashboard-h1'>Pagamento</h1>}
            <div className='dashboard-div'>
                {showVouchers && <SeeVoucher />}
                {buyVouchers && <BuyVouchers setPayVouchers={setPayVouchers} hidden={setBuyVouchers} />}
                {payVouchers && <PayVoucher pay={payVouchers} setPay={setPayVouchers} show={setBuyVouchers} showVouchers={setShowVouchers} />}
            </div>
        </section>
    )
}

export default Dashboard;