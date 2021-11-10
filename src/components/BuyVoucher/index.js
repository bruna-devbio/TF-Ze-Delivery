import React, { useState } from "react";
import InputMasked from "../InputMask";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Orders from "../Orders";
import Button from "../Button";
import "./index.css";
import "./responsive.css";

const BuyVouchers = ({
    setPayVouchers,
    hidden
}) => {

    const [noOrders, setNoOrders] = useState(true);
    const [values, setValues] = useState([{
        voucher: '',
        qtd: 0,
    }]);

    const handleChange = (i, e) => {
        let value = [...values];
        value[i][e.target.name] = e.target.value;
        setValues(value);
    }

    const addVoucher = () => {
        setValues([...values, { voucher: '', qtd: 0 }]);
    }

    const removeVoucher = (element) => {
        values.splice(element, 1)
        setValues([...values])
    }

    return (
        <section className="voucher-container">
            <h1 className='voucher-h1'>Digite o valor e a quantidade de vouchers</h1>
            <div className='voucher-main'>
                {values.map((element, index) => (
                    <div className="voucher-div-input">
                        <label className="voucher-label" key={index}>R$</label>
                        <InputMasked
                            mask='999,00'
                            type='text'
                            placeholder='Valor do Voucher'
                            className='voucher-input'
                            name='voucher'
                            onChange={(e) => handleChange(index, e)}
                            value={element.voucher}
                        >
                        </InputMasked>
                        <div className="voucher-amount-order">
                            <Button className="voucher-less-item" buttonOnClick={() => {
                                values.map((item, i) => {
                                    if (item.qtd > 1 && (element === item)) {
                                        values[i].qtd--
                                        setValues([...values])
                                    }
                                    return item;
                                })
                            }}
                            > - </Button>
                            <div className="voucher-input-qtd">
                                {element.qtd}
                            </div>
                            <Button className="voucher-more-item" buttonOnClick={() => {
                                values.map((item, i) => {
                                    if (item.qtd >= 0 && (element === item)) {
                                        values[i].qtd++
                                        setValues([...values])
                                        setNoOrders(false)
                                    }
                                    return item;
                                })
                            }}
                            > + </Button>
                        </div>
                        {index < 1 && <AddCircleOutlineIcon className='voucher-add' onClick={addVoucher} />}
                        {index >= 1 && <HighlightOffIcon className='voucher-remove' onClick={() => removeVoucher(index)} />}
                    </div>
                ))}
            </div>
            <Orders noOrders={noOrders}>
                <h1 className='orders-h1'>PEDIDOS</h1>
                <div className='orders-scroll'>
                    {values.map((index, key) => (
                        <div className='orders-items' key={key}>
                            <p className="orders-p-qtd">{index.qtd} Vouchers</p>
                            <p className="orders-p-voucher">R$ {index.voucher}</p>
                        </div>
                    ))}
                </div>
                <div className='orders-div-total'>
                    <div className='orders-total'>
                        <p className="orders-p-qtd">Total a pagar</p>
                        <p className="orders-p-voucher">R$ 150,00</p>
                    </div>
                    <Button className='orders-btn' buttonOnClick={() => setPayVouchers(true, hidden(false))}>IR PARA O PAGAMENTO</Button>
                </div>
            </Orders>
        </section >
    );
};

export default BuyVouchers;