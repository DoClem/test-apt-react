import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Article, fetchHomePageArticles, HomePageFilter } from "./api";
import "../../index.css";
import ArticleComponent from "./Article";

const Home = () => {
  const [articles, setArticles] = useState<null | Article[]>(null);
  const [filter, setFilter] = useState<HomePageFilter>('none')
  const navigate = useNavigate();

// crée un select sur la page
// valeur = homepagefilter
// Onchange
// faire le lien entre le select et la variable filter et faire le design 
  useEffect(() => {
    (async () => {
      const articles = await fetchHomePageArticles(filter);
      setArticles(articles.articles!);
    })();
  }, [filter]);

  const handleCardClick = (article: Article) => {
    navigate("/article", { state: article });
  };

  return (
<div>
  <h1 className="header-title">All Articles</h1>
    <div className="articles-container">
      {articles?.map((article, index) => (

       <ArticleComponent
       article={article}
       index={index}
       handleCardClick={handleCardClick}/>

      ))}
    </div>
  </div>
  );
};

export default Home;
