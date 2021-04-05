import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '../Button';
import './Navbar.css';
import Logo from '../../components/images/cauldron.png'
import { IconContext } from 'react-icons/lib'
import Bootstrap from 'bootstrap'

function Navbar() {
    const[click,setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        /*<>*/
        <IconContext.Provider value= {{color : '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link TO='/' className="navbar-logo" onClick={closeMobileMenu} >
                        <img className='navbar-icon' src={Logo} />
                        Poções e Soluções
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}   
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={closeMobileMenu}>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links">
                                Pagina Inicial
                            </Link>
                        </li>
                    
                    <li className='nav-item'>
                        <Link to='/potions' className="nav-links" onClick={closeMobileMenu}>
                            Poções
                        </Link>

                    </li>
                    <li className='nav-item'>
                        <Link to='/History' className="nav-links" onClick={closeMobileMenu}>
                            Historico
                        </Link>
                    </li>
                    
                    </ul>

                </div>
            </div>
        
        </IconContext.Provider>
    );
}

export default Navbar
