import React from 'react';
import QRCode from 'react-google-qrcode';

const PixQRCode = ({ text }) => {

  return (
    <div>
      <QRCode
        data={text}
        size={100}
        framed
      />
    </div>
  );
}

export default PixQRCode;