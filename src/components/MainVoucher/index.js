import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import imgVoucher from "../../assets/img/imgVoucher.png";
import "./index.css";
import Button from "../Button";

const MainVoucher = () => {

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
      <section className="container">
        <div className="div-input">
          <label className="label-voucher">R$</label>
          <Input
            type="text"
            placeholder="Valor do Voucher"
            className="voucher-input"
            name="voucher"
            onChange={onChangeValues}
            value={values.voucher}
          ></Input>
        </div>
        <div className="div-img">
          <img
            className="img-voucher"
            src={imgVoucher}
            alt="imagem ilustrativa de um voucher"
          />
        </div>

        <p className="text">
          Bora colocar no carrinho os voucher para presentear o time?
        </p>

        <h3 className="text title">Pedido mínimo de R$150,00</h3>

        <div className="div-button-voucher">
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

export default MainVoucher;
