import styles from './ArticleParagraph.module.scss'

const ArticleParagraph = ({subtitle, text, quote}) => {
  
  return (
    <div className={styles.paragraph}>
      <p className={styles.text}><strong>{ subtitle }</strong></p>
      <p className={styles.text}>{ text }</p>
      <p className={styles.quote}>{ quote }</p>
    </div>
  )
}

export default ArticleParagraph;




          
