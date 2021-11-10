import React, { useState } from "react";
import PixQRCode from '../../utils/Pix/pixQRCode';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeIcon from '@mui/icons-material/QrCode';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '../Button';
import CardMask from '../../utils/cardMask';
import "./index.css";
import "./responsive.css";

const PayVoucher = ({
    pay,
    setPay,
    show
}) => {
    const [card, setCard] = useState(false);
    const [pix, setPix] = useState(false);
    const [showQR, setShowQR] = useState(false);

    const handleClick = () => {
        setShowQR(true);
        setTimeout(() => setShowQR(false), 10000);
    };

    return (
        <section className="payment-container">
            {pay && <ArrowBackIcon className="payment-back" onClick={() => setPay(false, show(true))} style={{
                fontSize: '2rem'
            }} />}
            {card && <ArrowBackIcon className="payment-back" onClick={() => setCard(false)} style={{
                fontSize: '2rem'
            }} />
            }
            {pix && <ArrowBackIcon className="payment-back" onClick={() => setPix(false)} style={{
                fontSize: '2rem'
            }} />
            }
            <div className="payment-div">
                {card ?
                    <h1 className="payment-h1">Forma de pagamento: Cartão de crédito</h1>
                    : pix ? <h1 className="payment-h1">Forma de pagamento: PIX</h1>
                        : <h1 className="payment-h1">Escolha uma forma de pagamento</h1>}
                <div className="payment-total">
                    <p className="orders-p-qtd">Total a pagar</p>
                    <p className="orders-p-voucher">R$ 150,00</p>
                </div>
                {card ?
                    <div className="payment-data">
                        <CardMask />
                        <Button className='payment-btn' buttonOnClick={handleClick}>
                            EFETUAR PAGAMENTO
                        </Button>
                    </div>
                    : pix ? <div className="payment-data">
                        <div className="payment-qr-code-div">
                            <p className="payment-qr-code-text">
                                Utilize o QR Code para o pagamento do voucher
                            </p>
                            <PixQRCode className="payment-qrCode" text="https://www.google.com" />
                            <Button className="payment-btn" buttonOnClick={handleClick} type="button">
                                EFETUAR PAGAMENTO
                            </Button>
                            {showQR && ''}
                        </div>
                    </div>
                        : <div className="payment-options">
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
                }
            </div>
        </section >
    );
};

export default PayVoucher;