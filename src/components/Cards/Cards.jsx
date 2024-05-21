import React from 'react'
import { Card } from '../Card/Card';
import { initialCards } from '../Utils/constants';
import "./Cards.scss";


export const Cards = () => {
  return (
    <section className="cards">
        {initialCards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
    </section>
  )
}
