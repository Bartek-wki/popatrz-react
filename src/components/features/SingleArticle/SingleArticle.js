import styles from "./SingleArticle.module.scss"
import { getArticleById, getAllArticles } from "../../../redux/articlesRedux";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import LeftMenu from "../../views/LeftMenu/LefMenu";
import LinkWrapper from "../../views/LinkWrapper/LinkWrapper";
import ArticleNav from "../../views/ArticleNav/ArticleNav";
import { useEffect } from "react";
import {FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from 'react-share'
import ArticleParagraph from "../../views/ArticleParagraph/ArticleParagraph";

const SingleArticle = () => {
  const { id } = useParams();
  const article = useSelector(state => getArticleById(state, id));
  const articles = useSelector(state => getAllArticles(state));
  const reverseArticles = [...articles].reverse();
  const shareUrl = ''
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if(!article) return <Navigate to="/" />
  return (
    <div className={styles.articleSection}>
      <LeftMenu articles={reverseArticles} linkTo={"/article/"} name={'POPATRZ NA...'}/>
      <div className={styles.articleWrapper + ' ' + styles.container}>
        <ArticleNav linkTo={"/article/"} next={article.next} previous={article.previous} />
        <h3 className={styles.articleHeader}>{ article.articleTitle }</h3>
        <div className={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/images/article/${article.imageUrl}`} alt={article.opis} />
        </div>
        <div className={styles.textWrapper}>
          {article.paragraphs.map(paragraph => 
            <ArticleParagraph key={paragraph.subtitle} subtitle={paragraph.subtitle} text={paragraph.text} quote={paragraph.quote} />
          )}
          <p className={styles.author}>{article.author}</p>
        </div>
        <LinkWrapper month={article.month} option={'JAK MY PATRZYMY NA...'} mainTopic={article.mainTopic} linkTo={"/howWeLook/"} linkId={article.howWeLook} />
        <div className={styles.socialMedia}>
          <FacebookShareButton
            url={shareUrl}>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            url={shareUrl}>
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  )
}

export default SingleArticle;