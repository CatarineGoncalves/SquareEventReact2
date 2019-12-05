import React from 'react';
import '../../src/App.css';

import logoarte from '../Assets/img/logoarte.png';

function Footer() {
    return (

        // {/* <!-- ============ footer --> */}

        <footer id="home-footer">

            <div class="home-footer-box1">

                <div class="home-footer-titulo">
                    <p class="home-footer-texto estiloFooter"> Square Events </p>
                </div>

                <div class="home-footer-informacao">

                    <div class="home-footer-suaConta">
                        <p class="estiloFooter"> Sua Conta</p>
                        <a class="estiloFooter" href=""> Ajuda (FAQ) </a>
                        <a class="estiloFooter" href=""> Cadastre-se </a>
                    </div>

                    <div class="home-footer-redeSocial">
                        <p class="estiloFooter"> Redes Socias </p>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>

                    <div class="home-footer-contato">
                        <p class="estiloFooter">
                            Contato
                </p>
                        <p class="estiloFooter">
                            <a href="mailto:contato@thoughtworks.com.br">contato@thoughtworks.com.br</a>
                        </p>
                    </div>

                </div>

            </div>

            <div class="home-footer-box2">

                <div class="home-footer-logo">
                    <a class="estiloFooter" href="">
                        <img class="home-logoarte-footer" src={logoarte} alt="" />
                    </a>
                </div>

                <div class="home-footer-nomeEventos">
                    <p class="estiloFooter"> @thoughtworks</p>
                    <p class="estiloFooter"> @SquareEvents </p>
                </div>

                <div class="home-footer-direitoReservado">
                    <p class="estiloFooter"> Todos os direitos reservados</p>
                </div>

            </div>

        </footer>

    );
}
export default Footer;