import { useState, useEffect, useCallback } from 'react';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import FriendRow from './FriendRow';
import FilterMenu from './FilterMenu';
import styles from '../styles/Friends.module.css';
import Loader from './Loader';
import loaderStyles from '../styles/Loader.module.css';

import data from '../data/people.json';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [filteredFriends, setFilteredFriends] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreFriends);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fetchFriends = useCallback(async () => {
    setTimeout(() => {
      setFriends((prevFriends) => [...prevFriends, ...data]);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchFriends();
  }, [fetchFriends]);

  useEffect(() => {
    setFilteredFriends(friends);
  }, [friends]);

  function fetchMoreFriends() {
    setTimeout(() => {
      fetchFriends();
      setIsFetching(false);
    }, 1000);
  }

  const handleApplyFilters = (selectedFilters) => {
    if (selectedFilters.length === 0) {
      setFilteredFriends(friends);
    } else {
      const newFilteredFriends = friends.filter((friend) => selectedFilters.includes(friend.status));
      setFilteredFriends(newFilteredFriends);
    }
  };

  const handleClearFilters = () => {
    setShowFilterMenu(false);
    setFilteredFriends(friends);
  };  

  const handleCloseMenu = () => {
    setShowFilterMenu(false);
  };
  
  return (
    <div className={styles['friends-container']}>
      <div className={styles['filter-area']}>
        <button
          className={`${styles['filter-button']} ${isDarkMode ? styles['filter-button-dark'] : ''}`}
          onClick={() => setShowFilterMenu((prevState) => !prevState)}
        >
          <img src="filter.svg" alt="Filter" width='25' height='25' />
        </button>
        {showFilterMenu && <FilterMenu onApply={handleApplyFilters} onClose={handleCloseMenu} />}
        <div className={styles['separator']} />
        <span className={styles['clear-filters']} onClick={handleClearFilters}>
          Clear All
        </span>
      </div>
      <div className={styles['friends-list']}>
        {filteredFriends.length === 0
          ? Array.from({ length: 5 }).map((_, i) => <Loader key={i} />)
          : filteredFriends.map((friend) => <FriendRow key={friend.id} friend={friend} />)}
        {isFetching && (
          <div className={loaderStyles['loading']}>
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;
