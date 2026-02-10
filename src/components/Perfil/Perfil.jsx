import React from "react";
import FotoDePerfil from "../../assets/perfil.png"
import styles from "./Perfil.module.scss"


function Perfil (){
    return (
<section className={styles.containerTelaPerfil}>


<article>
    <img src={FotoDePerfil} alt="Foto de Perfil"/>
    <div className={styles.cardInfo}>
        <h2>Bianca Ferreira</h2>
        <h3>Voluntária Ativa</h3>
        <p className={styles.paragrafoSobreMim}>
            Apaixonada por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em  busca de novas oportunidades para ajudar.
            </p>

        <adress>
            <p>Gravatá, PE</p>
            <p>biianca.sarah@gmail.com</p>
            <p>Membro desde Janeiro de 2022</p>
        </adress>

    
    <ul className={styles.listaInteresses}>
        <li>Educação</li>
        <li>Meio Ambiente</li>
        <li>Assistência Social</li>
        <li>Design</li>
    </ul>
</div>
</article>

</section>
    )
}
export default Perfil