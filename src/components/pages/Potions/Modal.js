import React from 'react'
import { Button } from '../../Button';

const Modal = ({ handleClose, id = 'modal-bg', potionName }) => {
    
    const handleOutsideClick = (e) =>
    {
        if (e.target.id === id) handleClose();
    }

    return (
    <div id={id} className='modal-bg' onlick={handleOutsideClick}>
        <section className="modal">
            <p className="">Você deseja cofirmar a compra da {potionName} ?</p>
            <Button className='modal-button' onClick={handleClose}>Sim</Button>
            <Button className='modal-button' onClick={handleClose}>Não</Button>
        </section>
    </div>
    );
  };

export default Modal
