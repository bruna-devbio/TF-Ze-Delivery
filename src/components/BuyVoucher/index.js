import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
// import imgVoucher from "../../assets/img/imgVoucher.png";
import Button from "../Button";
import "./index.css";

const BuyVouchers = () => {

    const [values, setValues] = useState({
        voucher: '',
    });

    const onChangeValues = (event) => {
        setValues({
            ...values,
            [event.target.voucher]: event.target.value
        })
    };

    const navigateVoucher = useNavigate()
    navigateVoucher("/Voucher");

    return (
        <main>
            <section className="voucher-container">
                <div className="voucher-div-input">
                    <label className="voucher-label">R$</label>
                    <Input
                        type="text"
                        placeholder="Valor do Voucher"
                        className="voucher-input"
                        name="voucher"
                        onChange={onChangeValues}
                        value={values.voucher}
                    ></Input>
                </div>
                <div className="voucher-div-img">
                    <img
                        className="voucher-img"
                        // src={imgVoucher}
                        alt="imagem ilustrativa de um voucher"
                    />
                </div>

                <p className="voucher-text">
                    Bora colocar no carrinho os voucher para presentear o time?
                </p>

                <h3 className="voucher-text-title">Pedido mínimo de R$150,00</h3>

                <div className="voucher-div-button">
                    <Button
                        type="submit"
                        className="voucher-button"
                        buttonOnClick={navigateVoucher}
                    >CONTINUAR</Button>
                </div>
            </section>
        </main>
    );
};

export default BuyVouchers;