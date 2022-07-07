import { PencilLine } from 'phosphor-react';

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        alt="profile"
      />

      <div className={styles.profile}>
        <img src="https://github.com/sanderdsz.png" alt="user" />

        <strong>Sander Zuchinalli</strong>
        <span>web developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>
    </aside>
  )
}