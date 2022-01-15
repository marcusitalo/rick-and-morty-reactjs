import React from "react";
import { Card } from "react-bootstrap";

const Characters = ({ characters = [], characteInModal }) => {
  const modalCharacter = (character) => {
    characteInModal(character);
  };

  const cardBodyStyle = {
    position: "absolute",
    bottom: "0px",
    backgroundColor: "#000000bf",
    color: "#FFFFFF",
    width: "100%",
    margin: "0px",
    padding: "5px",
  };

  return (
    <div className="row">
      {characters.map((character, index) => (
        <div key={index} className="col mb-4">
          <Card
            style={{ width: "200px", cursor: "pointer" }}
            onClick={() => modalCharacter(character)}
          >
            <Card.Img src={character.image} alt={character.name} />
            <Card.Body style={cardBodyStyle}>
              <Card.Title style={{ fontSize: "15px" }}>
                {character.name}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Characters;
