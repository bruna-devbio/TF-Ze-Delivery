import React, { useState } from "react";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeIcon from '@mui/icons-material/QrCode';
import Button from '../Button';
import "./index.css";
import "./responsive.css";

const PayVoucher = () => {
    const [card, setCard] = useState(false);
    const [pix, setPix] = useState(false);

    return (
        <section className="payment-container">
            <div className="payment-div">
                <h1 className="payment-h1">Escolha uma forma de pagamento</h1>
                <div className="payment-total">
                    <p className="orders-p-qtd">Total a pagar</p>
                    <p className="orders-p-voucher">R$ 150,00</p>
                </div>
                <div className="payment-options">
                    <div className={`payment-option-card ${card && 'active'}`} onClick={() => setCard(true, setPix(false))}>
                        <div className="payment-card">
                            <CreditCardIcon />
                            <h2 className="payment-h2" >Cartão de crédito</h2>
                        </div>
                        <div className="payment-text-card">
                            <p>Envio de voucher após a liberação da operadora do seu cartão</p>
                        </div>
                    </div>
                    <div className={`payment-option-pix ${pix && 'active'}`} onClick={() => setPix(true, setCard(false))}>
                        <div className="payment-pix">
                            <QrCodeIcon />
                            <h2 className="payment-h2" >PIX</h2>
                        </div>
                        <div className="payment-text">
                            <p>Envio imediato do voucher</p>
                        </div>
                    </div>
                </div>
                <Button className="payment-btn">CONTINUAR</Button>
            </div>
        </section >
    );
};

export default PayVoucher;