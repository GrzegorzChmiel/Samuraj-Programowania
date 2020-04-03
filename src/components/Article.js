import React from "react";

const articleStyle = { marginTop: 40 };
const titleStyle = { marginBottom: 3, textTransform: "uppercase" };
const authorStyle = { display: "block", marginBottom: 10, fontSize: 12 };
const articleContentStyle = { fontSize: 15 };

/*
   const Article = props => {
   Poniżej dekompozycja props.
*/
const Article = ({ title, author, text }) => {
   return (
      <article style={articleStyle}>
         <h3 style={titleStyle}>{title}</h3>
         <span style={authorStyle}>{author}</span>
         <p style={articleContentStyle}>{text}</p>
      </article>
   );
};

export default Article;
