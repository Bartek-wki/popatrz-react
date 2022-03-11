import { Link } from 'react-router-dom';


const LeftMenuLink = ({ articleId, mainTopic, linkTo, name, howWeLookId }) => {
  
  let id = ''

  if (linkTo === '/howWeLook/') {
    id = howWeLookId;
  } else if (linkTo === '/article/') {
    id = articleId;
  }
  
  return (
    <li>
      <Link to={linkTo + id}>{name} {mainTopic}</Link>
    </li>
  )
}

export default LeftMenuLink;