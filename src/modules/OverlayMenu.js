class OverlayMenu {
  selectors = {
    root: "[data-js-overlay-menu]",
    dialog: "[data-js-overlay-menu-dialog]",
    burgerButton: "[data-js-overlay-menu-burger-button]",
  }

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  }

  constructor() {
    this.rootElemet = document.querySelector(this.selectors.root)
    this.dialogElement = this.rootElemet.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElemet.querySelector(
      this.selectors.burgerButton
    )
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.dialogElement.open = !this.dialogElement.open
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick)
  }
}

export default OverlayMenu
