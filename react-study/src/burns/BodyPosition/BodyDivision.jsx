import { Children, useEffect, useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: absolute;
  top: ${props =>
    props.state === "front"
      ? props?.position?.front?.top
      : props?.position?.back?.top};
  right: ${props =>
    props.state === "front"
      ? props?.position?.front?.right
      : props?.position?.back?.right};
  bottom: ${props =>
    props.state === "front"
      ? props?.position?.front?.bottom
      : props?.position?.back?.bottom};
  left: ${props =>
    props.state === "front"
      ? props?.position?.front?.left
      : props?.position?.back?.left};
  img {
    width: 100%;
    filter: ${props =>
      props?.isHover &&
      "invert(55%) sepia(100%) saturate(500%) hue-rotate(342deg) brightness(140%) contrast(101%);"};
    // &:hover {
    //   filter: invert(55%) sepia(100%) saturate(500%) hue-rotate(342deg)
    //     brightness(140%) contrast(101%);
    // }
    // &:active {
    //   filter: invert(50%) sepia(81%) saturate(3589%) hue-rotate(341deg)
    //     brightness(103%) contrast(101%);
    // }
  }
`;

export const BodyDivision = ({
  state,
  children,
  position,
  isHover,
  setHoverState,
}) => {
  const hoverHandler = e => {
    setHoverState(e.target.id);
  };
  const outHandler = e => {
    setHoverState("");
  };
  return (
    <StyledDiv
      state={state}
      position={position}
      isHover={isHover}
      onMouseEnter={hoverHandler}
      onMouseLeave={outHandler}
    >
      {children}
    </StyledDiv>
  );
};
