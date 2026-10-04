import { useState } from "react";
import "../styles/Article.css";
import ArticleDetail from "./ArticleDetail.jsx";
export default function Article({ isEditing }) {
  const [articleHeader, setArticleHeader] = useState("Article Header");
  const [leftHeader, setLeftHeader] = useState("Left Header");
  const [rightHeader, setRightHeader] = useState("Right Header");
  const [contents, setContents] = useState([{ content: "New Detail", id: 1 }]);

  const handleContent = (e, id) => {
    const newContent = contents.map((content) => {
      if (content.id === id) {
        return { ...content, content: e.target.value };
      } else {
        return content;
      }
    });
    setContents(newContent);
  };

  const addNewDetail = () => {
    const lastId = contents.at(-1).id;
    setContents([...contents, { content: "New Detail", id: lastId + 1 }]);
  };

  const handleArticleHeader = (e) => {
    setArticleHeader(e.target.value);
  };

  const handleLeftHeader = (e) => {
    setLeftHeader(e.target.value);
  };

  const handleRightHeader = (e) => {
    setRightHeader(e.target.value);
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
      <div className="mainDiv">
        {isEditing === false ? (
          <p>{leftHeader}</p>
        ) : (
          <input
            className="leftHeaderInput"
            type="text"
            value={leftHeader}
            onChange={handleLeftHeader}
          />
        )}

        <div>
          {isEditing === false ? (
            <p className="companyName">{rightHeader}</p>
          ) : (
            <input
              className="rightHeaderInput"
              type="text"
              value={rightHeader}
              onChange={handleRightHeader}
            />
          )}
          {contents.map((content) => {
            return (
              <ArticleDetail
                key={content.id}
                isEditing={isEditing}
                content={content.content}
                contentId={content.id}
                handleOnChange={handleContent}
              />
            );
          })}
          {/* //contents.map doesnt work for some reason even the first detail is
          not appearing in the DOM //what I did for now : change Article to
          include everything from headers to details however article detail
          should be another component for the sole purpose of adding a new
          detail which is also editable */}
          {isEditing && (
            <button class="addDetailButton" onClick={addNewDetail}>
              Add Detail +
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
