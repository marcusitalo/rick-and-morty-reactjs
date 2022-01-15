import React from "react";
import { CaretRight, CaretLeft } from "react-bootstrap-icons";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  const nextStyle = {
    top: "50%",
    position: "fixed",
    right: "0px",
  };

  const previousStyle = {
    top: "50%",
    position: "fixed",
    left: "0px",
  };

  return (
    <nav>
      {prev ? (
        <CaretLeft size={54} style={previousStyle} onClick={handlePrevious} />
      ) : null}
      {next ? (
        <CaretRight size={54} style={nextStyle} onClick={handleNext} />
      ) : null}
    </nav>
  );
};

export default Pagination;
