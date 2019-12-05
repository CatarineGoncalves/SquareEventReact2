
import React from 'react';
import '../Pages/Administrador/Administrador.css';

function SlidebarAdm (){
    return(

        <nav class="navbar-primary">
        <a href="#" class="btn-expand-collapse">Logout<span class="glyphicon glyphicon-menu-left"></span></a>
        <ul class="navbar-primary-menu">
            <li>
                <a href="#" onclick="menu('pendentes')"><span class="glyphicon glyphicon-list-alt"></span><span id="pendentes" class="nav-label">Eventos Pendentes</span></a>
                <a href="#" onclick="menu('aprovados')"><span class="glyphicon glyphicon-envelope"></span><span id="aprovados" class="nav-label">Eventos Aprovados</span></a>
                <a href="#" onclick="menu('apadrinhados')"><span class="glyphicon glyphicon-cog"></span><span id="apadrinhados" class="nav-label">Eventos Apadrinhados</span></a>
                <a href="#" onclick="menu('dashboard')"><span class="glyphicon glyphicon-film"></span><span id="dashboard" class="nav-label">Dashboard</span></a>

            </li>
        </ul>
    </nav>

    );
}

export default SlidebarAdm;