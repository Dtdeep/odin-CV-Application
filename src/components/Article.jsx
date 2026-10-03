import { useState } from "react";
import "../styles/Article.css";
export default function Article({ isEditing }) {
  const [articleHeader, setArticleHeader] = useState("Article Header");
  const handleArticleHeader = (e) => {
    setArticleHeader(e.target.value);
  };
  return (
    <article>
      {isEditing === false ? (
        <h2 className="articleHeader">{articleHeader}</h2>
      ) : (
        <input
          id="name"
          type="text"
          onChange={handleArticleHeader}
          value={articleHeader}
          className="articleHeader-input"
        />
      )}
    </article>
  );
}
