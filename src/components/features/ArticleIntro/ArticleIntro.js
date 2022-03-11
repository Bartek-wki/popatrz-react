import styles from "./ArticleIntro.module.scss"
import { Link } from 'react-router-dom';


const ArticleIntro = ({ imageUrl, opis, mainTopic, month, introParagraph, articleId }) => {
  return (
    <div data-aos="fade-left"
         data-aos-anchor-placement="bottom-bottom" 
         className={styles.articleIntro} >
      <div className={styles.articleIntroImage}>
        <img src={`${process.env.PUBLIC_URL}/images/article/${imageUrl}`} alt={opis} />
      </div>
      <div className={styles.articleIntroDescription}>
        <h4>POPATRZ NA { mainTopic }</h4>
        <p>{ month }</p>
        <p>{ introParagraph }</p>
      </div>
      <div>
        <Link to={"/article/" + articleId}>Czytaj więcej...</Link>
      </div>
    </div>
  )
}

export default ArticleIntro;