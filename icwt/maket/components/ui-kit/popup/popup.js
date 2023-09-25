const selectors = {
  buttonOpen: ".js-popup-button-open",
  buttonClose: ".js-popup-button-close",
  popupMenu: ".js-popup"
};

const classes = {
  active: "popup_active"
};

const buttonsClose = document.querySelectorAll(selectors.buttonClose);
const buttonsOpen = document.querySelectorAll(selectors.buttonOpen);

const handleOpenPopup = (e) => {
  const target = e.target;
  const currentDataPopupAttr = target.getAttribute('data-popup');
  const currentPopup = document.querySelector(`${selectors.popupMenu}[data-popup='${currentDataPopupAttr}']`);
  currentPopup.classList.add(classes.active);
}

const handleClosePopup = (e) => {
  const target = e.currentTarget;
  const currentPopup = target.closest(selectors.popupMenu);
  currentPopup.classList.remove(classes.active);
}

buttonsOpen.forEach(el => el.addEventListener("click", handleOpenPopup));
buttonsClose.forEach(el => el.addEventListener("click", handleClosePopup));
