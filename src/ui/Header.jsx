import styles from './Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Frequently asked
          <br />
          questions
        </h1>
      </header>
      <div className={styles.desc}>
        <p className={styles.descMain}>
          Products, Website or Brand Design, we’ve got you covered!
        </p>
        <p className={styles.descSub}>
          Give us your questions, and we can help you achieve our goals
          together!
        </p>
      </div>
    </>
  );
}

export default Header;
