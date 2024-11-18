import "../../index.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Article } from '../home/api';


const ArticleDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, publishedAt, urlToImage, description, content }: Article = location.state || {};

  return (
    <div className='article-container'>
      <button onClick={() => navigate(-1)}>
        Back
      </button>
      {title ? (
        <>
          <h1>{title}</h1>
          <img src={urlToImage} alt={title} style={{ maxWidth: "100%", borderRadius: "10px" }}/>
          <p><strong>Published on:</strong> {new Date(publishedAt).toLocaleDateString()}</p>
          <p><strong>Description:</strong> {description || "No description available."}</p>
          <p><strong>Content:</strong> {content || "No content available."}</p>
        </>
      ) : (
        <div>Article not found</div>
      )}
    </div>
  );

}

export default ArticleDetail;
