import styles from './LeftMenu.module.scss'
import LeftMenuLink from '../LefMenuLink/LeftMenuLink';

const LeftMenu = ({ articles, linkTo, name }) => {
  return (
    <div className={styles.leftMenuWrapper}>
      <h5>PRZECZYTAJ RÓWNIEŻ</h5>
      <div className={styles.scroll}>
        <ul className={styles.leftMenuArticle}>
          {articles.map(article => (
            <LeftMenuLink key={article.articleId} articleId={article.articleId} howWeLookId={article.howWeLook} mainTopic={article.mainTopic} linkTo={linkTo} name={name} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LeftMenu;