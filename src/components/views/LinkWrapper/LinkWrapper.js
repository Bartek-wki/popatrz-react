import styles from './LinkWrapper.module.scss'
import { Link } from 'react-router-dom';


const LinkWrapper = ({month, option, mainTopic, linkTo, linkId}) => {
  return (
    <div className={styles.linkWrapper}>
      <p>{ month }</p>
      <p>{option} { mainTopic }</p>
      <div>
        <Link to={linkTo +linkId}>
          czytaj więcej...
        </Link>
      </div>
    </div>
  )
}

export default LinkWrapper;