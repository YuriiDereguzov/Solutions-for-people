import React from "react";
import { Card } from "../Card/Card";
import leftIcon from "../../images/Left-icon.svg";
import rightIcon from "../../images/Right-icon.svg";
import "./Cards.scss";

export const Cards = (props) => {
  let cards = props.cards;
  return (
    <section className="cards">
      {cards?.map((card) => (
        <Card key={card._id} card={card} />
      ))}
      {props.moreCardsButton ? (
        <div className="cards__buttons">
          <button className="cards__button">
            <img
              className="cards__btn"
              src={leftIcon}
              alt="Стрелка влево"
              onClick={props.handleClickLastCard}
            />
          </button>
          <button className="cards__button">
            <img
              className="cards__btn"
              src={rightIcon}
              alt="Стрелка вправо"
              onClick={props.handleClickNextCard}
            />
          </button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};
