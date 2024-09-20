import React from "react";
import { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

export default function Father() {
  const { houseName, pocketMoney } = useContext(FamilyContext);
  return (
    <div>
      Father <br />
      {houseName} <br />
      {pocketMoney}
    </div>
  );
}
