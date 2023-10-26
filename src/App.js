import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StreamList from "./pages/StreamList";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieList from "./pages/MovieList";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    setAuthenticated(isAuthenticated === "true");
  }, []);

  return (
    <div className="warpper">
   
      <Router>
      {authenticated ? <Header /> : ""}
        <Routes>
          <Route
            path="/login"
            element={authenticated ? <StreamList /> : <LoginPage />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={authenticated ? <StreamList /> : <LoginPage />}
          />
          <Route
            path="/movie-list/:id"
            element={authenticated ? <MovieList /> : <LoginPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
