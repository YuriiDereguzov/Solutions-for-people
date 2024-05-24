// import { useCallback, useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Header } from "../Header/Header";
import { Helps } from "../Helps/Helps";
import { initialCards } from "../Utils/constants";
// import { Main } from "../Main/Main";
import "./App.scss";

function App() {
  // const filteredOne992 = initialCards.slice(0, 4);
  // const filteredTwo992 = initialCards.slice(0, 2);
  // const filteredOne320 = initialCards.slice(0, 2);
  // const filteredTwo320 = initialCards.slice(0, 1);

  const filtredCards = initialCards.slice(0, 3);
  const moreCardsButton = true;

  return (
    <div className="app">
      <Header />
      <Cards cards={initialCards} />
      <Helps />
      <Cards cards={filtredCards} moreCardsButton={moreCardsButton} />
      {/* <Main /> */}
    </div>
  );
}
// const [cardsAmount, setCardsAmount] = useState(3);
// const [moreCardsButton, setMoreCardsButton] = useState(false);
// const [filtredCards, setFiltredCards] = useState([]);

// const filterCards = () => {
//   let filtredCards = initialCards;

//   if (filtredCards.length > cardsAmount) {
//     setMoreCardsButton(true);
//   } else {
//     setMoreCardsButton(false);
//   }

//   filtredCards = filtredCards.slice(0, cardsAmount);
//   return filtredCards;
// }

// const filterCards = useCallback(() => {
//   let AllCards = JSON.parse(localStorage.getItem("AllCards"));
//   let filtredCards = AllCards;

//   if (filtredCards.length > cardsAmount) {
//     setMoreCardsButton(true);
//   } else {
//     setMoreCardsButton(false);
//   }

//   filtredCards = filtredCards.slice(0, cardsAmount);
//   return filtredCards;
// }, [cardsAmount]);

// useEffect(() => {
//     setFiltredCards(filterCards());
// }, [])

// function handleClickMoreCards() {
//   setCardsAmount(3 + 1);
// }

export default App;
