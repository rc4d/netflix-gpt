const heading = React.createElement("h1", {
    name:"Robin",
    dgn:"Software Engineer",
    style: {color: "red", backgroundColor: "lightblue"}
}, "Namaste everyone");

const heading2 = React.createElement("div", {id: "title"}, "Heading 2");

const container = React.createElement("div", {id:"container"}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
