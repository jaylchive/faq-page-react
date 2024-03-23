import styles from './Tab.module.css';

function Tab() {
  return (
    <ul className={styles.tab}>
      <li>
        <button type="button" className={`${styles.btn} active`}>
          Overview
        </button>
      </li>
      <li>
        <button type="button" className={styles.btn}>
          Design system
        </button>
      </li>
      <li>
        <button type="button" className={styles.btn}>
          Brand design
        </button>
      </li>
      <li>
        <button type="button" className={styles.btn}>
          Develop website
        </button>
      </li>
    </ul>
  );
}

export default Tab;
