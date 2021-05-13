const Pet = () => {
  return React.createElement("div", {}, [
  React.createElement("h1", {}, props.name),
  React.createElement("h2", {}, props.animal),
  React.createElement("h3", {}, props.personality),
  ]);
};

const App = () => {
  return React.createElement(
  React.createElement("h1", {}, "Adopt Me!"),
  React.createElement(Pet, {
    name: "Jack",
    animal: "Dog",
    personality: "Slobber-Monger"
  }),
  React.createElement(Pet, {
    name: "Rosie",
    animal: "Bird",
    personality: "evil",
  }),
  React.createElement(Pet, {name: "Kronk", animal: "Cat", personality: "Spacey-Loner"}),
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));