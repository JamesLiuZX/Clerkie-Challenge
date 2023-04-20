import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);
  const EXTEND_THRESHOLD = 80;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching, callback]);

  function handleScroll() {
    let scrollPosition = window.innerHeight + document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollPercentage = (scrollPosition / scrollHeight) * 100;

    if (scrollPercentage < EXTEND_THRESHOLD || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
