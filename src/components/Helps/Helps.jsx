import React from "react";
import imageTwo from "../../images/chris-yang-unsplash-2.jpg";
import "./Helps.scss";

export const Helps = () => {
  return (
    <section className="helps">
      <div className="helps__info">
        <div className="helps__container">
          <h2 className="helps__title">Solutions for people like you</h2>
          <p className="helps__description">
            How can we help your technology and services business develop a
            revenue engine based on Hubspot?
          </p>
          <div className="helps__buttons">
            <button className="card__button">Call to action</button>
            <button className="card__button">Call to action</button>
          </div>
        </div>
        <img
            className="helps__image"
            src={imageTwo}
            alt="Картинка кофе"
          />
      </div>
    </section>
  );
};
