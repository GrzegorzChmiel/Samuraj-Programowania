import React from "react";
import Article from "../components/Article";

const Articles = [
   {
      id: 1,
      title: "Czym jest teoria strun",
      author: "Jan Nowak",
      text: "Czym jest teoria strun - objaśnienie."
   },
   {
      id: 2,
      title: "Czym jest paradoks fermiego?",
      author: "Ania Kwiatkowska",
      text: "Czym jest paradoks fermiego - objaśnienie."
   },
   {
      id: 3,
      title: "Ciemna materia i ciemna energia?",
      author: "Jan Kowalski",
      text: "Ciemna materia i ciemna energia - objaśnienie."
   }
];

function convertToArticleComponent(article) {
   return <Article key={article.id} {...article}></Article>;
}

const HomePage = () => {
   const articles = Articles.map(article => convertToArticleComponent(article));
   return (
      <>
         <div className="home">{articles}</div>
      </>
   );
};

export default HomePage;
