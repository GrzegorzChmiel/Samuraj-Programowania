import * as React from "react";
import * as ReactDOM from "react-dom";

/*
 * Komponent funkcyjny Header.
 */
const Header = () => <h1>Witaj na stronie</h1>

/*
 * Komponent stanowy Article.
 */
class Article extends React.Component {
   render = () => {
      return <p>Tresc artykulu.</p>
   }
}

/*
 * Komponent stanowy Sekcja. Zagnie¿d¿a w sobie komponent Article.
 */
class Section extends React.Component {
   state = {
      inner_state1: 2,
      inner_state2: 3
   }
   render() {
      return (
         <>
            <Article />
            <p>Obiekt <b>state</b> komponentu stanowego <b>Section</b> ma wlasnosc <b>state.inner_state1</b> o wartosci: {this.state.inner_state1} oraz wlasnosc <b>inner_state2</b> o wartosci: {this.state.inner_state2}.</p>
         </>
      )
   }
}

/*
 * Komponent funkcyjny Blog - przez zagnie¿d¿enie spina ca³¹ resztê komponentów. Jest g³ównym komponentem.
 */
const Blog = () => {
   return (
      <>
         <Header />
         <Section />
      </>
   )
}

/*
 * Renderowanie g³ównego komponentu.
 */
ReactDOM.render(<Blog />, document.getElementById("root"));
