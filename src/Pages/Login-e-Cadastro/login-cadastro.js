import React, {Component} from 'react'; // importando o react
import '../Login-e-Cadastro/login-cadastro.css';
import Header from '../../Components/Header';
import '../../Assets/javascript/LoginCadastro'


class Login extends Component {

    LoginBtn(){
        console.log('uadhsasydguahsd')
        document.querySelector("body").className = "btn btn-primary"; 
    }
    CadastroBtn(){
        console.log('uadhsasydguahsd')
        document.querySelector("body").className = "btn btn-primary"; 
    }


    render(){
        return(
            <div>
                <Header/>
               
                <div className="first-con-div">
                    <div className="content first-content">
                        <div className="first-column">
                            <h2 className="title title-primary">Bem vindo!</h2>
                            <p className="description description-primary">Para participar da nossa comunidade</p>
                            <p className="description description-primary">faça teu login aqui</p>
                            <button id="signin" onClick={this.LoginBtn} className="btn btn-primary">Login</button>
                        </div>    
                        
                        <div className="second-column">
                            <h2 className="title title-second">Se cadastre</h2>
                            <p className="description description-second">e faça teu evento gratuito conosco!</p>
                                
                                <form className="form">
                                    <label className="label-input" for="">
                                        <i className="far fa-user icon-modify"/>
                                        <input type="text" placeholder="Nome Completo"/>
                                    </label>

                                    <label className="label-input" for="">
                                        <i className="far fa-user icon-modify"/>
                                        <input type="text-cmm" placeholder=" Nome da Comunidade"/>
                                    </label>
                    
                                    <label className="label-input" for="">
                                        <i className="far fa-envelope icon-modify"/>
                                        <input type="email" placeholder="Email"/>
                                    </label>
                    
                                    <label className="label-input" for="">
                                        <i className="fas fa-lock icon-modify"/>
                                        <input type="password" placeholder="Senha"/>
                                    </label>

                                    <label className="label-input" for="">
                                        <i className="fas fa-lock icon-modify"/>
                                        <input type="password" placeholder="Confirme sua senha"/>
                                    </label>
                    
                    
                                    <button className="btn btn-second">sign up</button>        
                                </form>
                        </div> 
                    </div>

                    <div className="content second-content">
                        <div className="first-column">
                            <h2 className="title title-primary">Olá, seja bem vindo de volta</h2>
                            <p className="description description-primary">Para participar da nossa comunidade se cadastre aqui</p>
                            <p className="description description-primary"/>

                            <button id="signup" onClick={this.CadastroBtn} className="btn btn-primary">Cadastro</button>
                        </div>
                    
                        <div className="second-column">
                            <h2 className="title title-second">Faça seu login aqui</h2>
                            <p className="description description-second">Não possui cadastro? Faça aqui agora</p>
                            <form className="form">
                                <label className="label-input" for="">
                                    <i className="far fa-envelope icon-modify"/>
                                    <input type="email" placeholder="Email"/>
                                </label>
                
                                <label className="label-input" for="">
                                    <i className="fas fa-lock icon-modify"/>
                                    <input type="senha" placeholder="Senha"/>
                                </label>
                
                                <a className="password" href="#">forgot your password?</a>
                            
                                <button className="btn btn-second">sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;