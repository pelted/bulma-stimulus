class BulmaCheckbox extends BulmaComponent {
  get defaultClasses() {
    return ["b-checkbox", "checkbox"]
  }

  connect() {
    this.build()
  }

  get template() {
    return BulmaRadio.builder(() => `
    <label class="${classes}">
      <span class="check"></span>
      <span class="control-label">${label}</span>
    </label>
    `)
  }

  get inputs() {
    return this.element.getElementsByTagName("input")
  }

  build() {
    let count = this.inputs.length
    for (let index = count-2; index >= 0; index-=2) {
      const input = {
        hidden: this.inputs.item(index),
        shown: this.inputs.item(index+1)
      }
      this._render(input)
    }
  }

  _render(input) {
    const options = {
      classes: this.defaultClasses.concat(Array.from(input.shown.classList.values())).join(' '),
      label: input.shown.dataset.label || input.shown.getAttribute("name")
    }
    const template = document.createElement("template")
    template.innerHTML = this.template(options)
    const injectionPoint = template.content.firstElementChild
    injectionPoint.insertAdjacentElement("afterbegin", input.shown)
    if(input.hidden) {
      injectionPoint.insertAdjacentElement("afterbegin", input.hidden)
    }
    const clone = document.importNode(template, true)
    this.element.appendChild(clone.content)
  }
}

export default BulmaCheckbox