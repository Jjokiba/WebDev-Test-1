import React from 'react'
import './Home.css'
import gif from '../../images/cauldron.png'

function Home() {
    return (
        <div className='HomePage'>
            <div className='text-area'>
                <h1 className='title-home'>Bem Vindo!</h1>
                <p className='home-text'>Seja Bem vindo ao site da loja Poções e Soluções de Annabelle Merigold, a loja localizada no Beco Vertical agora também atende pela internet, realize seus pedidos com a aba de Poções, onde temos todas as poções disponiveis para entrega</p>
                <img  src={gif} className='img-home' />
                <p className='home-text'> Conheça mais de nossa historia na aba de historia do site, abertos desde 1867 </p>
            </div>
        </div>
    )
}

export default Home
