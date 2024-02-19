import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
export function Comment({content,onDeleteComment}) {
function deleteComment(){onDeleteComment(content)}
const [like,setLike]=useState(0)
function likeCount(){
  setLike(like+1)
}

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário" onClick={deleteComment} >
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={likeCount}>
            <ThumbsUp />
            Aplaudir <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}