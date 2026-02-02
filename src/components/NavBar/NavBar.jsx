import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

//Import dos Components

import Inicio from "../Inicio/Inicio"
import AcoesDaConnect from "../AcoesDaConnect/AcoesDaConnect"
import QuemSomos from "../QuemSomos/QuemSomos"
import Perfil from "../Perfil/Perfil"

//Import das Imagens

import Logo from "../../assets/logo.png"
import ImgPerfil from "../../assets/perfil.png"


function NavBar (){
    return (
<BrowserRouter>

<nav>
    <img src={Logo} alt=""/>
    <ul>
        <li>
            <Link to ="/">Início</Link>
            </li>
        <li>
            <Link to ="/acoesDaConnect">Ações da Connect</Link>
            </li>
        <li>
            <Link to ="/quemSomos">Quem Somos</Link>
            </li>
    </ul>

    <Link to="/perfil">
    <img src={ImgPerfil} alt=""/>
    </Link>

</nav>

{/* Caixa Routes vai guardar todas as rotas */}

<Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path="/acoesDaConnect"element={<AcoesDaConnect/>}/>
    <Route path="/quemSomos"element={<QuemSomos/>}/>
    <Route path="perfil"element={<Perfil/>}/>




</Routes>
</BrowserRouter>

    )

}

export default NavBar