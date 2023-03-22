import { useEffect, useState } from "react";
import { BODY_CHECK_POSITION } from "../../utils/dictionary";
import { BodyDivision } from "./BodyDivision";

export const BodyPosition = () => {
  const [isHoverState, setHoverState] = useState("");

  return (
    <>
      <div className="body_position_box">
        {BODY_CHECK_POSITION.map((part, index) => (
          <BodyDivision
            state="front"
            key={index}
            position={part.position}
            setHoverState={setHoverState}
            isHover={isHoverState === part.id}
          >
            <img id={part.id} src={part.img.front} alt="body_part" />
          </BodyDivision>
        ))}
      </div>
      <div className="body_position_box">
        {BODY_CHECK_POSITION.map((part, index) => (
          <BodyDivision
            state="back"
            key={index}
            position={part.position}
            setHoverState={setHoverState}
            isHover={isHoverState === part.id}
          >
            <img id={part.id} src={part.img.back} alt="body_part" />
          </BodyDivision>
        ))}
      </div>
      <div className="body_position_box">
        {BODY_CHECK_POSITION.map((part, index) => (
          <BodyDivision
            key={index}
            position={part.position}
            setHoverState={setHoverState}
          >
            <button id={part.id}>{part.label}</button>
          </BodyDivision>
        ))}
      </div>
    </>
  );
};
