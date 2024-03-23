import { useEffect, useState } from 'react';
import ChevronDown from '../icons/ChevronDown';
import styles from './FaqItem.module.css';

function FaqItem({ faq }) {
  const [active, setActive] = useState(
    faq.id === 2 || faq.id === 3 ? true : false
  );

  useEffect(function () {}, []);

  return (
    <li
      className={`${styles.item} ${active ? 'active' : ''}`}
      onClick={() => setActive(cur => !cur)}
    >
      <div className={styles.title}>
        <h3>{faq.title}</h3>
        <span>
          <ChevronDown />
        </span>
      </div>
      {active && <p className={styles.content}>{faq.content}</p>}
    </li>
  );
}

export default FaqItem;
