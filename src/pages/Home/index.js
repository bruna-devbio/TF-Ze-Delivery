import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button";
import "./index.css";

const Home = () => {

  const navigate = useNavigate();
  navigate('/Login')

  return (
    <main className="container">
      <div className="img-home">
        <img
          className="img-maria-home"
          src={mariaVoucherHome}
          alt="Logo Maria Voucher"
        />
      </div>

      <div className="texto-home">
        <h1 className="titulo-home">Seja bem-vinde!</h1>

        <h3>Saudades de um Happy Hour né minha filha?</h3>

        <p>
          Compre com Maria Voucher os melhores cupons, para seus funcionários
          sextar de forma segura e com qualidade.
        </p>
      </div>

      <div className="div-btn-home">
        <Button
          type="submit"
          buttonText="CONTINUAR"
          className="button-home"
          buttonOnClick={navigate}
        />
      </div>
    </main>
  )
}
export default Home;