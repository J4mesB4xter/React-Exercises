const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal), 
    React.createElement("h3", {}, props.type),
  ])
}

const App = () => {
  return React.createElement(
      "div",
      {},
      [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { name:"Mia", animal:"Cat", type:"WOBBLY"}),
      React.createElement(Pet, { name:"Bandit", animal:"Cat", type:"MOOOOO"}),
      React.createElement(Pet, { name:"Amber", animal:"Cat", type:"CHoNK"}),
      ]
      
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));