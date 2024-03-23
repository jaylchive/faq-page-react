import { faqs } from '../data/faq';
import FaqItem from './FaqItem';
import styles from './FaqList.module.css';

function FaqList() {
  return (
    <ul className={styles.list}>
      {faqs.map(faq => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </ul>
  );
}

export default FaqList;
