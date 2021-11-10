import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button";
import PixQRCode from '../../components/Pix'
import mariaVoucherHome from "../../assets/img/LogoMobile.png";
import "./index.css";
import "./responsive.css";

const Welcome = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  return (
    <main className="home-container">
      <div className="home-img">
        <img
          className="home-img-maria"
          src={mariaVoucherHome}
          alt="Logo Maria Voucher"
        />
      </div>

      <div className="home-texto">
        <h1 className="home-titulo">Seja bem-vinde!</h1>

        <h3>Saudades de um Happy Hour né minha filha?</h3>

        <p>
          Compre com Maria Voucher os melhores cupons, para seus funcionários
          sextar de forma segura e com qualidade.
        </p>
      </div>

      <div className="home-div-btn">
        <Button
          type="submit"
          className="home-button"
          buttonOnClick={navigate}>
          CONTINUAR
        </Button>

        <Button
          buttonOnClick={() => setShow((prev) => !prev)}
          type="button"
        >
          PAGAMENTO
        </Button >

        { 
           show ?
           ( 
              <PixQRCode
                text='https://www.google.com'
              />
            ) 
            : 
            setTimeout(() => setShow(false), 5000)
        }
        
       
      </div>
    </main>
  )
}
export default Welcome;