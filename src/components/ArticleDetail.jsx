import "../styles/ArticleDetail.css";
const ArticleDetail = ({ isEditing, content, contentId, handleOnChange }) => {
  if (isEditing == false) {
    return <p className="articleDetailComponent">{content}</p>;
  } else {
    return (
      <input
        className="articleDetailComponent"
        type="text"
        value={content}
        onChange={(e) => {
          handleOnChange(e, contentId);
        }}
      />
    );
  }
};

export default ArticleDetail;
