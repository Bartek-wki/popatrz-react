import styles from './AboutUs.module.scss'
import Carousel from '../Carousel/Carousel';
import { useSelector } from 'react-redux';
import { getAbout } from '../../../redux/aboutRedux';


const AboutUs = () => {
  const about = useSelector(state => getAbout(state));
  console.log(about);

  return (
    <>
      <Carousel />
      <div className={styles.articleSection}>
        <div className={styles.articleWrapper + ' ' + styles.container}>
          <h3 className={styles.articleHeader}>O NAS</h3>
          <div className={styles.aboutWrapper}>
            <p>{about.descriptionUs}</p>
            <p className={styles.quote}>"{about.quote}"</p>
            <p className={styles.listTitle}><strong>{about.descriptionSite.title}</strong></p>
            <ul className={styles.list}>
              <li>{about.descriptionSite.paragraphOne}</li>
              <li>{about.descriptionSite.paragraphTwo}</li>
              <li>{about.descriptionSite.paragraphThree}</li>
              <li>{about.descriptionSite.paragraphFour}</li>
            </ul>
            <p className={styles.author}><strong>{about.author}</strong></p>
            <p className={styles.invitation}>{about.info}</p>
            <p className={styles.findUs}>Znajdziesz nas na: <a href='https://www.facebook.com/KSM-Str%C3%B3%C5%BCa-1808063609225741'>{about.findUs}</a></p>
            <p className={styles.contact}>{about.contact}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;