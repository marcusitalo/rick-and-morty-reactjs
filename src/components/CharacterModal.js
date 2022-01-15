import React from "react";
import { Modal } from "react-bootstrap";
import {
  DropletFill,
  Droplet,
  DropletHalf,
  Fingerprint,
} from "react-bootstrap-icons";

import BackgroundImage from "../resources/images/background-modal.gif";

function CharacterModal({ character = {}, closeModal, show }) {
  const handleClose = () => {
    closeModal();
  };

  const iconStatus = {
    position: "absolute",
    margin: "7px",
  };

  const imageModal = {
    border: "1px solid rgb(40 44 49)",
    borderBottom: "10px solid rgb(40 44 49)",
    borderRadius: "50%",
    zIndex: "2",
  };
  const imageBackground = {
    position: "absolute",
    width: "700px",
    bottom: "calc(50% - 290px)",
    left: "calc(50% - 360px)",
  };
  const modalBodyStyle = {
    backgroundColor: "rgb(40 44 49)",
    margin: "-170px 25% 2em",
    color: "#FFFFFF",
    borderRadius: "35px",
    textAlign: "center",
    paddingTop: "145px",
  };

  const originStyle = {
    fontSize: "10px"
  }

  const getIcons = (status) => {
    switch (status) {
      case "Alive":
        return (
          <DropletFill size={13} style={{ ...iconStatus, color: "brown" }} />
        );
      case "Dead":
        return <Droplet size={13} style={{ ...iconStatus, color: "black" }} />;
      case "unknown":
        return (
          <DropletHalf size={13} style={{ ...iconStatus, color: "gray" }} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {show ? (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header style={{ margin: "auto", border: "0px" }}>
            <img
              src={BackgroundImage}
              alt="Background"
              style={imageBackground}
            />
            <img
              src={character.image}
              alt={character.name}
              style={imageModal}
            />
          </Modal.Header>
          <Modal.Body style={modalBodyStyle}>
            <Modal.Title>{character.name}</Modal.Title>
            <div>
              Species : {character.species} <Fingerprint />
            </div>
            <div>
              Status : {character.status}
              {getIcons(character.status)}
            </div>
            <div>Gender : {character.gender}</div>
            <div style={originStyle}>Origin : {character.origin.name}</div>
            <div style={originStyle}>Location: {character.location.name}</div>
          </Modal.Body>
        </Modal>
      ) : null}
    </>
  );
}

export default CharacterModal;
