import styles from './Header.module.css';

import igniteLogo from  "../../assets/ignite-simbol.svg";

export function Header() {
  return(
    <div className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" />
    </div>
  )
}