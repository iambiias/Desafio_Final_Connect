import styles from "./Inicio.module.scss";
import ImgInicial from "../../assets/imagemInicial.png"
function Inicio() {
  return (
    <section className={styles.containerTelaInicial}>
      <div>
        <h1> Projetos Sociais que transformam </h1>
        <p>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </p>
      </div>
      <img className={styles.imgInicial} src={ImgInicial} alt="Imagem da tela inicial" />
    </section>
  );
}
export default Inicio;