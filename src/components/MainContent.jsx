import Article from "./Article.jsx";
import { useState } from "react";
const MainContent = ({ isEditing }) => {
  const [articles, setArticle] = useState([1]);
  const addNewArticle = () => {
    const lastId = articles.at(-1);
    setArticle([...articles, lastId + 1]);
  };
  return (
    <main>
      <h1>CV</h1>
      {articles.map((article) => {
        return <Article isEditing={isEditing} key={article} />;
      })}
      {isEditing && (
        <button class="addDetailButton" onClick={addNewArticle}>
          Add New Article +
        </button>
      )}
    </main>
  );
};

export default MainContent;
