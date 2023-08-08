

const parent = React.createElement("div", {id: "parent"},
 React.createElement("div",{id:"child"},
  [React.createElement("h1",{},"Hi from H1 tag"),React.createElement("h2",{},"Hi from H2 tag"),]
));








const heading = React.createElement("h1", {id:"Heading"}, "Hello World From Mohsin");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);