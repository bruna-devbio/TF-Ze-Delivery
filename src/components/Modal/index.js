import React from 'react';
import './index.css';

function Modal({
    children
}) {
    return (
        <div className="modal">
            <div className="modal-container">
                {children}
            </div>
        </div >
    );
}

export default Modal;