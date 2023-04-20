import styles from '../styles/FilterButton.module.css';

const FilterButton = ({ text, onClick, active }) => {
  return (
    <button
      className={`${styles['filter-button']} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FilterButton;
