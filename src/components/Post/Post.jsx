import Comment from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post(props) { 
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars3.githubusercontent.com/u/17098981?s=460&v=4" alt="avatar" />
          <div className={styles.authorInfo}>
            <strong>Sander Zuchinalli</strong>
            <span>web developer</span>
          </div>
        </div>
        <time title="july 06 at 08:10" dateTime="2022-05-11 08:10:00">published 1 hour ago</time>
      </header>
      <div className={styles.content}>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
      </div>
      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea 
          placeholder="leave a comment"
        />
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}