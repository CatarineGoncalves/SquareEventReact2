import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';


import Login from './Pages/Login-e-Cadastro/login-cadastro.js';
// import Cadastro from './Pages/Login-e-Cadastro/login-cadastro.js';
import CrieSeuEvento from './Pages/Crie-seu-evento/crie-seu-evento.js'


const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path ='/Login' component={Login}/>
                <Route path ='/criandoevento' component={CrieSeuEvento}/>
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
