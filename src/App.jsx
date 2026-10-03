import { useState } from "react";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails.jsx";

function App() {
  const [isEditing, setIsEditing] = useState(true);

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };
  return (
    <main className="main-container">
      <PersonalDetails isEditing={isEditing} />
      <button type="submit" onClick={handleEditing}>
        {isEditing == true ? "Submit" : "Edit"}
      </button>
    </main>
  );
}

export default App;
