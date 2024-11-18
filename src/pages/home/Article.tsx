import { Article as ArticleType } from "./api"

interface ArticleProps {
 index: number
 handleCardClick: (article: ArticleType) => void
}
const Article = ({ article, index, handleCardClick }: { article: ArticleType } & ArticleProps) => {

  return (
    <div
      className="article-card"
      key={index}
      onClick={() => handleCardClick(article)}>
      <img
        src={article.urlToImage}
        alt={article.title}
      />
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
  )
}

export default Article
