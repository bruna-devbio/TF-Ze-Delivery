import React, { useState, useEffect } from "react";
import currency from '../../utils/currency';
import { getVoucher } from "../../services";
import LogoPreto from "../../assets/img/LogoPreto.png";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from "../Button";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import Modal from "../Modal";
import './index.css';
import './responsive.css';

const SeeVoucher = ({
  buyVouchers,
  setShow,
}) => {

  const [vouchers, setVouchers] = useState([]);
  const [select, setSelect] = useState(false);
  const [email, setEmail] = useState(false);
  const [JSON, setJSON] = useState(false);
  const [loading, setLoading] = useState(false);
  const [voucherSend, setVoucherSend] = useState(false);
  const currentUser = localStorage.getItem('uid')

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false, setVoucherSend(true)), 4500)
  };

  useEffect(() => {
    getVoucher()
      .then(snap => {
        const vouchers = []
        snap.forEach(doc => {
          if (currentUser === doc.data().userId) {
            vouchers.push(doc.data())
          }
        })
        setVouchers(vouchers)
      })
  }, [currentUser]);

  return (
    <section className='vouchers-container'>
      {voucherSend ?
        <div className="vouchers-div">
          <div className="vouchers-complete">
            <CheckCircleIcon className="check" style={{
              fontSize: '8rem'
            }} />
            <p className="vouchers-p">
              Seu vouchers foram enviados com sucesso.
            </p>
          </div>
          <p className="vouchers-p-complete" onClick={() => buyVouchers(true, setShow(false))}>
            Voltar para o inicio
          </p>
        </div>
        : vouchers.map((item, key) => (
          item.vouchers.map((voucher) => (
            <div className='seevoucher-main'>
              <div className='seevoucher-item'>
                <div className='seevoucher-data'>
                  <p className='seevoucher-qtd'>{voucher.qtd} Vouchers de {currency(voucher.price)}</p>
                  <p className="seevoucher-total">Valor total: {currency(item.total)}</p>
                </div>
                <div className='seevoucher'>
                  <img className='seevoucher-logo' src={LogoPreto} alt='logo' />
                  <h1 className='seevoucher-value'>MARIAV0{item.userId.length > 10 && item.userId.substring(0, 7).toUpperCase()}</h1>
                </div>
                <div className={`seevoucher-select ${select && 'active'}`} onClick={() => select ? setSelect(false) : setSelect(true)}>
                  <p className="seevoucher-select-send">Selecione o tipo de envio</p>
                </div>
                {select &&
                  <div className='seevoucher-options'>
                    <p className="seevoucher-email" onClick={() => setEmail(true)}>Enviar por e-mail</p>
                    <p className="seevoucher-json" onClick={() => setJSON(true)}>Exportar em JSON</p>
                  </div>}
                {email && <Modal>
                  <div className='modal-voucher'>
                    <div className='modal-header'>
                      <h2 className="modal-code">Código do voucher</h2>
                      <h2 className="modal-email">e-mail</h2>
                    </div>
                    <div className="modal-rows">
                      <div className="modal-column-row">
                        <p className="modal-p-code">MARIAV{item.userId.length > 10 && item.userId.substring(0, 7).toUpperCase()}</p>
                        <Input className="modal-input-email" placeholder="Digite o e-mail" />
                      </div>
                    </div>
                    <div className="modal-info">
                      <div className="modal-div-btn">
                        <Button className='modal-btn' buttonOnClick={handleClick}>ENVIAR VOUCHER</Button>
                        <Button className='modal-btn' buttonOnClick={() => setEmail(false)}>CANCELAR</Button>
                      </div>
                    </div>
                  </div>
                </Modal>}
                {/* {JSON ? :} */}
                {loading && <Loading />}
              </div>
            </div>
          ))
        ))
      }
    </section>
  )
}

export default SeeVoucher;
