import { useState, useEffect } from "react";

const debounce = (func, wait, immediate, args) => {
  let timeout;

  return () => {
    const context = this;
    const callNow = immediate && !timeout;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

const MAX_ARTICLES = 500;
const ARTICLE_INCREMENT = 30;

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(ARTICLE_INCREMENT);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 300);

  useEffect(() => {
    if (!loading) return;

    if (count + ARTICLE_INCREMENT >= MAX_ARTICLES) {
      setCount(MAX_ARTICLES);
    } else {
      setCount(count + ARTICLE_INCREMENT);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { count };
};
