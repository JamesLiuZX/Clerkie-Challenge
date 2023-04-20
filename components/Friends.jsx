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

  // We introduce a timeout of 1s to showcase the loader effect.
  const fetchInitialFriends = useCallback(async () => {
    setTimeout(() => {
      setFriends((prevFriends) => [
        ...prevFriends,
        ...data.map((friend, index) => ({ ...friend, dataIndex: prevFriends.length + index })),
      ]);
    }, 1000);
  }, []);

  // This is the actual fetch function that subsequent fetches call.
  const fetchFriends = useCallback(() => {
    setFriends((prevFriends) => [
      ...prevFriends,
      ...data.map((friend, index) => ({ ...friend, dataIndex: prevFriends.length + index })),
    ]);
  }, []);

  useEffect(() => {
    fetchInitialFriends();
  }, []);

  useEffect(() => {
    setFilteredFriends(friends);
  }, [friends]);

  // We introduce a slight delay to handle when the user slides the scrollbar all the way down, 
  // to prevent a large number of fetches being called in a short amount of time.
  function fetchMoreFriends() {
    setTimeout(() => {
      fetchFriends();
      setIsFetching(false);
    }, 300);
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
        : filteredFriends.map((friend) => <FriendRow key={friend.dataIndex} friend={friend} />)}
        {isFetching && (
          <div className={loaderStyles['loading']}>
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;
