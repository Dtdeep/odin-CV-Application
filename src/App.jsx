import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  const [isEditing, setIsEditing] = useState(true);

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="main-container">
      <SideBar isEditing={isEditing} />
      <MainContent isEditing={isEditing} />
      <button className="submit-button" type="submit" onClick={handleEditing}>
        {isEditing == true ? "Submit" : "Edit"}
      </button>
    </div>
  );
}

export default App;
