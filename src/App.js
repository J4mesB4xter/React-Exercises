const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Bandit"),
    React.createElement("h3", {}, "Cat"), 
    React.createElement("h3", {}, "MOOOOO"),
  ])
}

const App = () => {
  return React.createElement(
      "div",
      {},
      [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet),
      ]
      
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));