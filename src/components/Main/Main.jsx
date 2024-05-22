import React from "react";
import { Cards } from "../Cards/Cards";
import "./Main.scss";
import { Helps } from "../Helps/Helps";

export const Main = () => {
  return (
    <main className="main">
      <Cards />
      <Helps />
    </main>
  )
};
