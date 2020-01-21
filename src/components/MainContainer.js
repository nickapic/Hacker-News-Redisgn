import React, { useState, useEffect } from "react";
import { getStoryIds } from "../api";
import { Article } from "./Articles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const MainContainer = () => {
  const { count } = useInfiniteScroll();
  const [articleIds, setArticles] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setArticles(data));
  }, []);

  return (
    <div className="main-container">
      <span className="content-heading">
        <strong>News</strong> Articles
      </span>
      {articleIds.slice(0, count).map(articleId => (
        <Article articleId={articleId} />
      ))}
    </div>
  );
};
