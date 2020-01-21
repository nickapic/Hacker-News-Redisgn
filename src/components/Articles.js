import React, { useState, useEffect } from "react";
import { getStory, mapTime } from "../api";

export const Article = ({ articleId }) => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    getStory(articleId).then(data => data && data.url && setArticle(data));
  }, []);

  return article && article.url ? (
    <div className="article-box">
      <p className="article-title">{article.title}</p>
      <p className="article-by">Author : {article.by}</p>
      <p className="article-published">Published {mapTime(article.time)} ago</p>
      <a href={article.url}>Read More</a>
    </div>
  ) : null;
};
