import React from 'react'
import './history.css'
import imgLoja from '../../images/potions-shop.jpg'
import imgLoja2 from '../../images/potions-shop2.jpg'
import imgLojaInter from '../../images/potions-shop-inside.jpg'
function history() {
    return (
        <div>
            <div className='history-page'>
            <div className='history-text-area'>
                <h1 className='title-history'>Historia</h1>
                <p className='history-text'>A loja Poções e Soluções foi criada em 1867, quando Adovaldo Berivaldo, o fundador, terminou suas aulas de quimica e juntou dinheiro o suficiente de seu arduo antigo trabalho para conseguir fundar uma propria loja, que sucedeu por muito tempo visto que sua propria paixão era estudar quimica e realizar alquimia com seus poderes de bruxo.</p>
                <img src={imgLoja}  className='img-history' />
                <p className='history-text'>Após a criação de sua primeira poção de sucesso, Adovaldo se sentiu mais motivado a continnuar sua carreira para fora, por isso ele expandiu a parte de cima da loja com um grande laboratorio de alquimia para testes de poções e viveu por toda sua vida viajando ao mundo para encontrar formas de trazer para a loja raros ingredientes</p>
                <img src={imgLoja2}  className='img-history' />
                <p className='history-text'>Mesmo após a partida de Adovaldo, a loja aida se manntém com inovações e modernidades, a anos continuamos a inovar no mercado de poções e além de trazer mais variedade de desejos dos clientes, agora trazemos também um site proprio que permite a possibilidade da compra de poções diretamente da internet</p>
                <p className='history-text'>Além de nossa inovação, temos grande organização na prateleiras e padronização clara de nossas embalagens, que são fabricadas unicamente para nossa loja, com os mais raros produtos que se pode encontrar no mercado.</p>
                <img src={imgLojaInter}  className='img-history' />
                <p className='history-text'> Conheça mais de nossa historia na aba de historia do site, abertos desde 1867 </p>
            </div>
        </div>
        </div>
    )
}

export default history
