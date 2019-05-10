import * as React from "react";
import * as ReactDOM from "react-dom";

const classColorOrange = "orange"
const header = <h1 className="title">Witaj na stronie!</h1>

const main = (
   <div>
      <p className={classColorOrange}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae iste similique itaque a sequi provident corporis fuga, neque libero dolore quidem iure aliquam mollitia, velit pariatur quos sint iusto culpa?</p>
   </div>
)

const footerTxt = "Tekst stopki"
const buttonHandleClick1 = function () {
   alert("Klik!!")
}
const buttonHandleClick2 = () => alert("Klik2!!")
const footer = (
   <>
      <footer>
         {footerTxt}
      </footer>
      <button type="button" onClick={buttonHandleClick1}>Przycisk 1</button>
      <button type="button" onClick={buttonHandleClick2}>Przycisk 2</button>
   </>
)

const elementsToRender = [header, main, footer]
ReactDOM.render(elementsToRender, document.getElementById("root"));
