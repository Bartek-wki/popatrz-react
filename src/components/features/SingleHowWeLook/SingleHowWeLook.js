import styles from './SingleHowWeLook.module.scss'
import LeftMenu from '../../views/LeftMenu/LefMenu';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import LinkWrapper from "../../views/LinkWrapper/LinkWrapper";
import { useSelector } from 'react-redux';
import { getAllHowWeLook, getHowWeLookById } from '../../../redux/howWeLookRedux';
import ArticleNav from '../../views/ArticleNav/ArticleNav';
import Meets from '../../views/Meets/Meets';
import { useEffect } from 'react';
import {FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from 'react-share'


const SingleHowWeLook = () => {
  const { id } = useParams();
  const howWeLook = useSelector(state => getHowWeLookById(state, id));
  const allHowWeLook = useSelector(state => getAllHowWeLook(state));
  const reverseAllHowWeLook = [...allHowWeLook].reverse();
  const shareUrl = ''

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  if(!howWeLook) return <Navigate to="/" />
  return (
    <div className={styles.articleSection}>
      <LeftMenu articles={reverseAllHowWeLook} linkTo={"/howWeLook/"} name={'JAK MY PATRZYMY NA...'}/>
      <div className={styles.articleWrapper + ' ' + styles.container}>
        <ArticleNav linkTo={"/howWeLook/"} next={howWeLook.next} previous={howWeLook.previous} />
        <h3 className={styles.articleHeader}>{ howWeLook.howWeLookTitle }</h3>
        <div className={styles.calendarWrapper}>
          <div className={styles.textCalendarWrapper}>
            {howWeLook.meets.map(meet => 
              <Meets key={meet.data} data={meet.data} name={meet.name}/>
              )}
          </div>
          <div className={styles.imageCalendarWrapper}>
            <img src={ `${process.env.PUBLIC_URL}/images/calendar/${howWeLook.imageCalendarUrl}` } alt={ howWeLook.opis } />
          </div>
        </div>

        <div className={styles.sumUpWrapper}>
          <h6>{howWeLook.subTitleOne}</h6>
          <div className={styles.imageSumUpWrapper}>
            <img src={ `${process.env.PUBLIC_URL}/images/howWeLook/${howWeLook.imageSumUpOneUrl}` } alt="" />
          </div>
          <div className={styles.textSumUpWrapper}>
            <p>{ howWeLook.sumUpOneFirst }</p>
            <p>{ howWeLook.sumUpOneSecond }</p>
          </div>
        </div>

        <div className={styles.sumUpWrapper + ' ' + styles.right}>
          <h6>{howWeLook.subTitleTwo}</h6>
          <div className={styles.imageSumUpWrapper}>
            <img src={ `${process.env.PUBLIC_URL}/images/howWeLook/${howWeLook.imageSumUpTwoUrl}` } alt="" />
          </div>
          <div className={styles.textSumUpWrapper}>
            <p>{ howWeLook.sumUpTwoFirst }</p>
            <p>{ howWeLook.sumUpTwoSecond }</p>
          </div>
        </div>

        <div className={styles.sumUpWrapper}>
          <h6>{howWeLook.subTitleThree}</h6>
          <div className={styles.imageSumUpWrapper}>
            <img src={ `${process.env.PUBLIC_URL}/images/howWeLook/${howWeLook.imageSumUpThreeUrl}` } alt="" />
          </div>
          <div className={styles.textSumUpWrapper}>
            <p>{ howWeLook.sumUpThreeFirst }</p>
            <p>{ howWeLook.sumUpThreeSecond }</p>
          </div>
        </div>

        <div className={styles.sumUpWrapper + ' ' + styles.right}>
          <h6>{howWeLook.subTitleFour}</h6>
          <div className={styles.imageSumUpWrapper}>
            <img src={ `${process.env.PUBLIC_URL}/images/howWeLook/${howWeLook.imageSumUpFourUrl}` } alt="" />
          </div>
          <div className={styles.textSumUpWrapper}>
            <p>{ howWeLook.sumUpFourFirst }</p>
            <p>{ howWeLook.sumUpFourSecond }</p>
          </div>
        </div>

        <LinkWrapper month={howWeLook.month} option={'POPATRZ NA...'} mainTopic={howWeLook.mainTopic} linkTo={"/article/"} linkId={howWeLook.articleId} />
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

export default SingleHowWeLook;