import React from 'react';
import './App.css';
import Footer from './Components/Footer'
import Header from './Components/Header'



function App() {
  return (
    <div className="App">

    <Header/>


      <div id="home-banner">
        <img className="home-banner-img" src={require("./Assets/img/banner.jpg")} alt="banner do site"/>
        <div id="home-banner-transparente">
          <img className="home-logoarte-img" src={require("./Assets/img/logoarte.png")} alt="arte escrita do logo square events"/>
        </div>
      </div>
          
      <main id="home-section-destaque">
            <div className="home-box-texto-destaque">
              <p className="home-texto-destaque">Eventos em destaque</p>
              <hr className="home-destaque-hr"/>
            </div>

              <div id="home-section-carrosel">
                <div className="slider">
                  <div className="item">
                    <img src="https://picsum.photos/id/239/550/550" alt=""/>
                  </div>

                    <div className="item">
                      <img src="https://picsum.photos/id/240/550/550" alt=""/>
                    </div>

                      <div className="item">
                        <img src="https://picsum.photos/id/241/550/550" alt=""/>
                      </div>

                      <div className="item">
                        <img src="https://picsum.photos/id/242/550/550" alt=""/>
                      </div>
                      
                      <div className="item">
                        <img src="https://picsum.photos/id/243/550/550" alt=""/>
                      </div>  

                      <div className="item">
                        <img src="https://picsum.photos/id/250/550/550" alt=""/>
                      </div>
                              
                      <div className="item">
                        <img src="https://picsum.photos/id/252/550/550" alt=""/>
                      </div>

                      <div className="item">
                        <img src="https://picsum.photos/id/255/550/550" alt=""/>
                      </div>

                      <div className="item">
                        <img src="https://picsum.photos/id/247/550/550" alt=""/>
                      </div>


                </div>
              </div>
      </main>

                              
      <section id="home-section-beneficios">
        <div className="home-box-texto-beneficios">
          <h2 className="home-texto-h2-beneficios">lorem</h2>

          <hr className="home-beneficios-hr"/>

          <p className="home-texto-p-beneficios">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita dicta asperiores? Tempore velit, quisquam facilis maiores repellat, debitis numquam voluptatibus tenetur sed facere neque praesentium provident, magnam expedita veritatis.</p>
        </div>


        <section id="home-section-img1-beneficios">
          <div className="home-box-img1-beneficios">
            <div className="home-caixa-img1-beneficios"/>
            <div className="home-div-img1-transparente">
              <img className="home-beneficios1-img" src={require("./Assets/img/beneficios1.png")} alt="imagem "/>
            </div>
          </div> 
                          
          <div className="home-box-texto-beneficios-img1 animated bounceInDown">
            <p className="home-box-texto-p1-beneficios ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit laborum suscipit reprehenderit quis. Magnam eaque aut maxime est, excepturi autem non laboriosam veniam veritatis. Nam nobis ipsa repellat maiores?</p>
            <button className="btn">
              <a href="">Inscreva-se </a>
            </button>
          </div>
        </section>
                                   
        <section id="home-section-img2-beneficios">
          <div className="home-box-img2-beneficios">
            <div className="home-caixa-img2-beneficios"/>
            <div className="home-div-img2-transparente">
              <img className="home-beneficios2-img" src={require("./Assets/img/beneficios2.jpg")} alt="imagem "/>
            </div>
          </div>

          <div className="home-box-texto-beneficios-img2 animated bounceInLeft">
            <p className="home-box-texto-p2-beneficios">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugit laborum suscipit reprehenderit quis. Magnam eaque aut maxime est, excepturi autem non laboriosam veniam veritatis. Nam nobis ipsa repellat maiores?</p>
            <button className="btn btn2">
              <a href=""> Inscreva-se </a>
            </button>
          </div>
        </section>
      </section>


      <section id="home-section-contador">
        <img className="home-contador-img" src={require("./Assets/img/road-2930115.jpg")} alt="Imagem de uma mulher ao fundo codificando"/>
          <div className="home-section-box-contador">
            <div className="home-contador-numeros">
              <img className="home-contador-icone-img1" src={require("./Assets/img/tickets.png")} alt=""/>
              <img className="home-contador-icone-img2" src={require("./Assets/img/mapa.png")} alt=""/>
              <img className="home-contador-icone-img3" src={require("./Assets/img/bandeira.png")}  alt=""/>
              <img className="home-contador-icone-img4" src={require("./Assets/img/comunidade.png")}  alt=""/>
            </div>

            <div className="home-contador-descricao">
              <h3 className="home-contador-descricao-h3-1"> 100 - Eventos Submetidos </h3>
              <h3 className="home-contador-descricao-h3-2"> 20 - Eventos Realizados </h3>
              <h3 className="home-contador-descricao-h3-3"> 400 - Comunidades </h3>
              <h3 className="home-contador-descricao-h3-4"> 08 - Categorias </h3>
            </div>
          </div>
      </section>

      <section id="home-section-mobile">
        <div className="home-section-mobile-texto">
          <p className="home-section-mobile-texto-p-button1">Acompanhe-os
            <button className="buttonMobile1">
              <a href=""> Eventos</a>
            </button>
          </p>
                                                  
          <p className="home-section-mobile-texto-p-button2">pelo seu
            <button className="buttonMobile2">
              <a href="">Celular</a>
            </button>
          </p>
                                                
        </div>

        <div className="home-section-mobile-box">
          <div>
            <img className="home-section-mobile-img" src={require("./Assets/img/mobile.png")} alt=""/>
          </div>

          <div className="home-section-mobile-box-texto animated bounceInUp">
            <div className="home-section-mobile-box-texto-p">
              <p className="home-section-mobile-box-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maxime non sit, dicta laudantium obcaecati quas explicabo repudiandae. Enim nesciunt vitae temporibus distinctio soluta molestias, placeat vero atque ad! Unde.</p>
            </div>

            <button className="btn home-section-mobile-button-final">
              <a href=""> Inscreva-se </a>
            </button>
          </div>
          </div>
      </section>

    <Footer/>  
    </div>

  );
}
                                            
export default App;
