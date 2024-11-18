import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Article, fetchHomePageArticles, HomePageFilter } from "./api";
import "../../index.css";
import ArticleComponent from "./Article";

const Home = () => {
  const [articles, setArticles] = useState<null | Article[]>(null);
  const [filter, setFilter] = useState<HomePageFilter>("none");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const articles = await fetchHomePageArticles(filter);
      setArticles(articles.articles!);
    })();
  }, [filter]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as HomePageFilter);
  };

  const handleCardClick = (article: Article) => {
    navigate("/article", { state: article });
  };

  return (
    <div>
      <h1 className="header-title">All Articles</h1>
      <div className="filter">
        <label htmlFor="filter-select" className="filter-select">
          Filter by:
        </label>
        <select id="select-filter" value={filter} onChange={handleFilterChange}>
          <option value="none">No Filter</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <div className="articles-container">
        {articles?.map((article, index) => (
          <ArticleComponent
            article={article}
            index={index}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
