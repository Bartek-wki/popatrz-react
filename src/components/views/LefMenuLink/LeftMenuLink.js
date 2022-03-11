import { Link } from 'react-router-dom';


const LeftMenuLink = ({ articleId, mainTopic, linkTo, name }) => {
  return (
    <li>
      <Link to={linkTo + articleId}>{name} {mainTopic}</Link>
    </li>
  )
}

export default LeftMenuLink;