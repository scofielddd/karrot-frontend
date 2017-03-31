import template from "./groupPopup.html";
import controller from "./groupPopup.controller";
import "./groupPopup.styl";

let groupPopupComponent = {
  bindings: {
    id: "@",
    name: "@"
  },
  template,
  controller
};

export default groupPopupComponent;
