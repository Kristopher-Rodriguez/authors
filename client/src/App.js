import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayAllAuthors from "./components/DisplayAllAuthors";
import AuthorForm from "./components/AuthorForm";
import UpdateAuthor from "./components/UpdateAuthor";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Favorite Authors</h1>
        <Routes>
          <Route path="/" element={<DisplayAllAuthors />} />
          <Route path="/new" element={<AuthorForm />} />
          <Route path="/edit/:id" element={<UpdateAuthor />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
