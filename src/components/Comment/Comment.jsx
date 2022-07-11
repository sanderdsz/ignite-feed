import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export default function Comment({ comment }) {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/sanderdsz.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Sander Zuchinalli</strong>
              <time title="july 06 at 08:10" dateTime="2022-05-11 08:10:00">1 hour ago</time>
            </div>
            <button title="Comment delete">
              <Trash size={24} />
            </button>
          </header>
          <p>Congratulations, so good...</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />applause<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}