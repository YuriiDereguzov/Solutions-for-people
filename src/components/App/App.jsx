import { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Header } from "../Header/Header";
import { Helps } from "../Helps/Helps";
import { initialCards } from "../Utils/constants";
import "./App.scss";
import {
  //Порог смены экрана
  SCREEN_WIDTH_1150,
  SCREEN_WIDTH_500,
  //Стандартное колличество карточек на странице
  INITIAL_COUNT_MOVIES_FOR_DEFAULT,
  INITIAL_COUNT_MOVIES_FOR_MOBILE,
  INITIAL_COUNT_MOVIES_FOR_DESKTOP,
  INITIAL_COUNT_MOVIES_FOR_DEFAULT_MAIN,
  INITIAL_COUNT_MOVIES_FOR_MOBILE_MAIN,
  INITIAL_COUNT_MOVIES_FOR_DESKTOP_MAIN,
} from "../Utils/constants";

function App() {
  const [cardsAmount, setCardsAmount] = useState(3);
  const [cardsAmountMain, setCardsAmountMain] = useState(6);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  function resize() {
    if (window.innerWidth > SCREEN_WIDTH_1150) {
      setCardsAmount(INITIAL_COUNT_MOVIES_FOR_DESKTOP);
      setCardsAmountMain(INITIAL_COUNT_MOVIES_FOR_DESKTOP_MAIN);
    } else if (window.innerWidth > SCREEN_WIDTH_500) {
      setCardsAmount(INITIAL_COUNT_MOVIES_FOR_MOBILE);
      setCardsAmountMain(INITIAL_COUNT_MOVIES_FOR_MOBILE_MAIN);
    } else {
      setCardsAmount(INITIAL_COUNT_MOVIES_FOR_DEFAULT);
      setCardsAmountMain(INITIAL_COUNT_MOVIES_FOR_DEFAULT_MAIN);
    }
  }

  const filtredCardsMain = initialCards.slice(0, cardsAmountMain);
  const filtredCards = initialCards.slice(cardIndex, cardsAmount);
  const moreCardsButton = true;

  const handleClickNextCard = () => {
    if (cardsAmount !== initialCards.length) {
      setCardIndex(cardIndex + 1);
      setCardsAmount(cardsAmount + 1);
    }
    return cardsAmount;
  };
  const handleClickLastCard = () => {
    if (cardIndex !== 0) {
      setCardIndex(cardIndex - 1);
      setCardsAmount(cardsAmount - 1);
    }
    return cardIndex;
  };

  return (
    <div className="app">
      <Header />
      <Cards cards={filtredCardsMain} />
      <Helps />
      <Cards
        cards={filtredCards}
        moreCardsButton={moreCardsButton}
        handleClickLastCard={handleClickLastCard}
        handleClickNextCard={handleClickNextCard}
      />
    </div>
  );
}

export default App;
