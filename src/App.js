import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Pokedex from "./Components/Pokedex";
import OnePokemon from "./Components/OnePokemon";
import Battle from "./Components/Battle";

export default function App() {
  const [posts, setPosts] = useState([]);
  //const API = "http://localhost:8080/pokemon";
  const API = "https://poke-fight-backend.onrender.com/pokemon";
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Pokedex posts={posts.slice(0, 151)} />} />
        <Route
          path="/battle"
          element={<Battle posts={posts.slice(0, 151)} />}
        />
        <Route
          path="/pokemon/:id"
          element={<OnePokemon posts={posts.slice(0, 151)} />}
        />
        <Route
          path="/Pokemon/:id/:info"
          element={<OnePokemon posts={posts.slice(0, 151)} />}
        />
        <Route path="*" element={<div>404 Seite nicht gefunden</div>} />
      </Routes>
    </>
  );
}
