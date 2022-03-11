import styles from "./Home.module.scss"
import { Link } from 'react-router-dom';
import { getAllArticles } from '../../../redux/articlesRedux';
import { getAllHowWeLook } from '../../../redux/howWeLookRedux';
import { useSelector } from 'react-redux';
import ArticleIntro from "../../features/ArticleIntro/ArticleIntro";


const Home = () => {
  const articles = useSelector(state => getAllArticles(state))
  const lastArticleId = articles[articles.length - 1].articleId;
  const reverseArticles = [...articles].reverse();

  const howWeLook = useSelector(state => getAllHowWeLook(state))
  const lastHowWeLookId = howWeLook[howWeLook.length - 1].howWeLook;

  return (
    <div className={styles.home}>
      <div className={styles.background} style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 65%, #1e272e 99%), url(${process.env.PUBLIC_URL + '/images/background-3.jpg'})`
      }}>
      </div>
      <div className={styles.homeWrapper}>
        <header>
          <h1>POPATRZ</h1>
          <h2>gdzie?</h2>
        </header>
        <nav className={styles.homeNav}>
          <ul className={styles.horizontalNav}>
            <li>
              <Link to={"/article/" + lastArticleId}>Czytaj</Link>
            </li>
            <li>
              <Link to={"/howWeLook/" + lastHowWeLookId}>Na co patrzymy?</Link>
            </li>
            <li>
              <Link to={"/about"}>O nas...</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.articleIntroWrapper}>
          {reverseArticles.map(article => (
            <ArticleIntro
              key={article.articleId}
              imageUrl={article.imageUrl}
              opis={article.opis}
              mainTopic={article.mainTopic}
              month={article.month}
              introParagraph={article.introParagraph}
              articleId={article.articleId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;