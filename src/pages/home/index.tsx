import { useEffect, useState } from "react";
import { Article, fetchHomePageArticles } from "./api";

const Home = () => {
  // Logique du composant
  // Appels api
  // Gestion parametres
  const [articles, setArticles] = useState<null | Article[]>(null)

  useEffect(() => {
    (async () => {
      const articles = await fetchHomePageArticles()
      // undefined = si y a un pb
      // null = vide
      setArticles(articles.articles!)
    })();
  }, [])

  // Template
  // Elements affichés par ton composant
  return (
    <div>
      <h1>All Articles</h1>
        {articles?.map((article, index) => {
          return (
            <div key={index}>
              {article.title}
              {article.publishedAt}
              <img src={article.urlToImage}/>
            </div>
          )
        })}
    </div>
  )
};

export default Home;
