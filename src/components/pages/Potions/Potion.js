import React, { Component, useState } from 'react'
import genericImg from './Potion Images/potion-generic.png'
import { Button } from '../../Button'
import Modal from './Modal'


function Potion({ potDesc, potName, img}) {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <div>
        <div className='potionCard container'>
            
            <img className='potImg' src={img ? img : genericImg}></img>
            <h1 className='potName'>{potName ? potName : 'Nome da poção' }</h1>
            <p className='potDesc'>{potDesc ? potDesc : 'Descrição da poção'}</p>
            
            <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={()=>setModalVisible(true)}>Comprar</Button>
            
        </div>
            {isModalVisible ? <Modal potionName={potName} handleClose={ () => setModalVisible(false)}/> : null}
        </div>
        
    )
}

export default Potion
