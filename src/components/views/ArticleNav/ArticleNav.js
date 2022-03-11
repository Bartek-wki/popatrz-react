import styles from './ArticleNav.module.scss'
import { Link } from 'react-router-dom';


const ArticleNav = ({linkTo, next, previous}) => {
  return (
    <ul className={styles.articleNav}>
      <li>
        <Link to={linkTo + next}>
          next
          <i className="fa fa-arrow-left"></i>
        </Link>
      </li>
      <li>
        <Link to={linkTo + previous}>
          previous
          <i className="fa fa-arrow-right"></i>
        </Link>
      </li>
    </ul>
  )
}

export default ArticleNav;