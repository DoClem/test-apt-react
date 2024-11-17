import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Article, fetchHomePageArticles } from "./api";
import "../../index.css";

const Home = () => {
  const [articles, setArticles] = useState<null | Article[]>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const articles = await fetchHomePageArticles();
      setArticles(articles.articles!);
    })();
  }, []);

  const handleCardClick = (article: Article) => {
    navigate("/article", { state: article });
  };

  return (
<div>
  <h1 className="header-title">All Articles</h1>
    <div className="articles-container">
      {articles?.map((article, index) => (
        <div
          className="article-card"
          key={index}
          onClick={() => handleCardClick(article)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={article.urlToImage} alt={article.title}/>
          <div className="article-card-content">
            <div className="article-title">{article.title}</div>
            <div className="article-date">
              {new Date(article.publishedAt).toLocaleDateString()}
            </div>
            <div className="article-description">
              {article.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Home;
