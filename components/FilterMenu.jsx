import { useState } from 'react';
import styles from '../styles/FilterMenu.module.css';

const FilterMenu = ({ onApply, onClose }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectedFilters((prev) => [...prev, e.target.value]);
    } else {
      setSelectedFilters((prev) => prev.filter((filter) => filter !== e.target.value));
    }
  };

  const handleApplyClick = () => {
    onApply(selectedFilters);
  };

  const handleClearAll = () => {
    setSelectedFilters([]);
    onApply([]);
  };

  const handleCloseMenu = () => {
    onClose();
  };

  return (
    <div className={styles['filter-menu']}>
      <div className={styles.header}>
        <span className={styles.clearAll} onClick={handleClearAll}>Clear all</span>
        <span className={styles.title}>Filter</span>
        <button className={styles.closeButton} onClick={handleCloseMenu}>x</button>
      </div>
      <hr className={styles.separator} />
      <div className={styles['filter-options']}>
        <h6>Friend Status</h6>
        <label>
          <input
            type="checkbox"
            value="Close Friends"
            checked={selectedFilters.includes('Close Friends')}
            onChange={handleCheckboxChange}
          />{' '}
          Close Friends
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Super Close Friends"
            checked={selectedFilters.includes('Super Close Friends')}
            onChange={handleCheckboxChange}
          />{' '}
          Super Close Friends
        </label>
      </div>
      <button className={styles['apply-btn']} onClick={handleApplyClick}>
        Apply
      </button>
    </div>
  );
};

export default FilterMenu;
