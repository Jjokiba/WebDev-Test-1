import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../images/cauldron.png'
import './Footer.css'
import { IconContext } from 'react-icons/lib'

function Footer() {
    return (
        <div className='footer'>
            <Link TO='/' className="footer-logo">
                    <img className='footer-logo' src={Logo} />
            </Link>
            <p className='footer-text'>Desenvolvedor da pagina: João Vitor Raboni Ribeiro <br/> Prova 1 Desenvolvimento Web, IFSP - Campus Capivari</p>
            
            <div className='social-media'>
                <div className='social-icon-link'>
                <IconContext.Provider value= {{color : '#fff'}}>
                        <Link 
                         className='social-icon-link'
                         to='/'
                         target='_blank'
                         aria-label='Instagram'
                         >
                            <FaInstagram/>
                        </Link>
                        <Link 
                         className='social-icon-link'
                         to={'//www.linkedin.com/in/joão-vitor-raboni-ribeiro/'}
                         target='_blank'
                         aria-label='LinkedIn'
                        >
                            <FaLinkedin/>
                        </Link>
                    </IconContext.Provider>
                </div>
            </div>    
        </div>
    )
}

export default Footer
