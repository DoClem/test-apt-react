
//  <index>
//      <Article />
//  </index>
// props = propriétés
// objet: { isGreen: true }
// props.isGreen
// <Article monProp="test" />
// Article = props
// <Article isGreen />
// <Article isGreen={true} />
// <Article handleCardClick={() => 42}
// props = { prop1, prop2, prop3 }
// <Article prop1="" prop2="" prop3="" />
// <Article prop1={ prop1, prop2, prop3 } />

import { Article as ArticleType } from "./api"

interface ArticleProps {
 index: number
 handleCardClick: (article: ArticleType) => void
}
// const ObjectClem = { couleur: 'rouge', voiture: 'BM', ordinateur: 'MAC', valise: { stylo: 'bic', instument: 'flutte' } }
// afficher(monObjet.couleur)
// afficher(monObjet.voiture)

// const { couleur, voiture, ordinateur, { console } } = { couleur: 'rouge', voiture: 'BM', ordinateur: 'MAC' }
// const { couleur, voiture, ordinateur, } = LesObjectClem()
// const monObjet = recevoirMonObjet()
// afficher(monObjet.voiture)
// Destructuration VVVVVV
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
