import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom';
import { getAllArticles } from '../../../redux/articlesRedux';
import { getAllHowWeLook } from '../../../redux/howWeLookRedux';
import { useSelector } from 'react-redux';



const Navbar = () => {
  const articles = useSelector(state => getAllArticles(state))
  const lastArticleId = articles[articles.length - 1].articleId;

  const howWeLook = useSelector(state => getAllHowWeLook(state))
  const lastHowWeLookId = howWeLook[howWeLook.length - 1].howWeLook;
  
  return (
    <nav className={styles.navbar}>
      <Link to={"/"}>Popatrz <span>gdzie?</span></Link> 
      <ul className={styles.menu}>
      <li>
        <i className={"fa fa-bars"}></i>
        <ul className={styles.dropdown}>
          <li>
            <Link to={"/article/" + lastArticleId}>Czytaj</Link> 
          </li>
          <li>
            <Link to={"/howWeLook/" + lastHowWeLookId}>Na co patrzymy?</Link>  
          </li>
          <li>
            <Link to={"/about"}>O nas... </Link>
          </li>
        </ul>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar;