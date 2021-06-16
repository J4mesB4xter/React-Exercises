import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import Pet from './Pet'

//Raw REACT
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { name: "Mia", animal: "Cat", type: "WOBBLY" }),
//     React.createElement(Pet, { name: "Bandit", animal: "Cat", type: "MOOOOO" }),
//     React.createElement(Pet, { name: "Amber", animal: "Cat", type: "CHoNK" }),
//   ]);
// };

const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Mia" animal="Cat" type="wObBlY" />
      <Pet name="Bandit" animal="Cat" type="MOOOO" />
      <Pet name="Amber" animal="Cat" type="CHoNK" /> */}
    </div>
  )
}
ReactDOM.render(<App/>, document.getElementById("root"));
