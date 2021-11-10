import React, { useState, useEffect } from "react";
import './index.css';
import Orders from "../Orders";
import { getVoucher } from "../../services";

const SeeVoucher = () => {
  const [vouchers, setVouchers] = useState([])

  useEffect(() => {
    getVoucher()
      .then(snap => {
        const vouchers = []
        snap.forEach(doc => {
          vouchers.push(doc.data().vouchers)
        })
        setVouchers(vouchers)
        console.log(vouchers)
      })
  }, [])


  return (
    <section>
      <div className='seevoucher-main'>
        {
          vouchers.map((item, key) => (
            item.map((element) => (
              <div className='seevoucher-item'>
                <div className='voucher-info'>
                  <input type='checkbox' />
                  <div className='voucher-detail'>
                    <p>{element.price}</p>
                    <p>{element.qtd}</p>
                  </div>
                </div>
                <select name='select' className='select-options'>
                  <option value='email'>Email</option>
                  <option value='json'>JSON</option>
                </select>
              </div>
            ))
          ))
        }
      </div>

      <Orders />
    </section>

  )
}

export default SeeVoucher;