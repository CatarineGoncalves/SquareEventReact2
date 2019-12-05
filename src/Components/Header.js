import React from 'react';
import '../../src/App.css';
import {Link} from 'react-router-dom'

import logo from '../Assets/img/logo.png';


function Header() {
  return (
    <header id="home-header">
        <nav id="home-nav">

            <ul className="topnav">
                {/* Defina uma classNamee a Ul*/}

                <div className="home-logo">
                    <a href="">
                        <img className="home-logo-img animated flip" src={logo} alt="imagm do logo square events"/>
                    </a>
                </div>


                <div className="home-buscar">
                    <div className="home-corpo-buscar">

                        <div className="home-box-icones-bucsar">
                            <input className="home-input" type="text" placeholder="Digite aqui para buscar"/>
                        </div>
                    </div>
                </div>


                <li className="home-button-crie-evento-header1">
                    <Link to = '/Login'> Login </Link>

                </li>


                <li className="home-button-crie-evento-header2">

                    <button className="btnEvento  ">
                        <a href="#"> + Crie seu Evento </a>
                    </button>

                </li>

                <li className="icon">
                    {/* Inclui o ícone do responsivo na lista */}
                    <a href="javascript:void(0);" onclick="myFunction()">&#9776;
                    </a>
                    {/* Chama a função javascript no evento click do icon */}
                </li>

            </ul>
        </nav>



    </header>

    //<!-- fim do header -->
  );
}

export default Header;