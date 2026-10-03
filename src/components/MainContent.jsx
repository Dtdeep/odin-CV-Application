import Article from "./Article.jsx";
const MainContent = ({ isEditing }) => {
  return (
    <main>
      <h1>CV</h1>
      <Article isEditing={isEditing} />
    </main>
  );
};

export default MainContent;
