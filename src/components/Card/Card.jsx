import React from "react";
import "./Card.scss";

export const Card = (props) => {
  return (
    <div className="card">
      <div
        className={`card__badge ${
          props.card.color === "light"
            ? "card__badge_light"
            : "card__badge_blue"
        }`}
      >
        {props.card.category}
      </div>
      <div className="card__image">
        <img
          className="card__img"
          src={props.card.image}
          alt={props.card.title}
        />
      </div>
      <div className="card__content">
        <p className="card__author">{props.card.author}</p>
        <h2 className="card__title">{props.card.title}</h2>
        <p className="card__description">{props.card.description}</p>
      </div>
      <button
        className={`card__button ${
          props.card.color === "light"
            ? "card__badge_light"
            : "card__badge_blue"
        }`}
      >
        Call to action
      </button>
    </div>
  );
};
