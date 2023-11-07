"use strict";

function Project(props) {
  return React.createElement("figure", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, React.createElement("img", {
    src: props.img
  })), React.createElement("figcaption", null, React.createElement("a", {
    href: props.url,
    target: "_blank"
  }, props.caption)));
}

function ProjectList() {
  return React.createElement("div", {
    id: "img-container"

  }));
}

var el = React.createElement(ProjectList, null);
ReactDOM.render(el, document.getElementById("img-container"));