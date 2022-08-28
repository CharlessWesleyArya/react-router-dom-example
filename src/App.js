import { Link, Route, Routes } from "react-router-dom";
import { Books } from "./Books";
import { Home } from "./Home";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
