import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import CharacterModal from "./components/CharacterModal";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [characterInModal, setCharacterInModal] = useState({});
  const [show, setShow] = useState(false);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const closeModal = () => setShow(false);

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  const characteInModal = (character) => {
    setShow(true);
    setCharacterInModal(character);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <div>
      <Navbar title="Rick and Morty App" />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className="container mt-5">
        <Characters characters={characters} characteInModal={characteInModal} />
      </div>
      <CharacterModal
        character={characterInModal}
        show={show}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
