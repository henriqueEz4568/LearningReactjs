import styles from './Post.module.css';

export function Post(props) {
return(
<div className={styles.mainDiv}>
<strong className={styles.a}>{props.author}</strong>
<p>{props.content}</p>
</div>

)

}