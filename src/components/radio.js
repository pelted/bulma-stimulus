class BulmaRadio extends BulmaCheckbox {
  get defaultClasses() {
    return ["b-radio", "radio"]
  }

  build() {
    let count = this.inputs.length
    for (let index = count-1; index >= 0; index--) {
      const input = {
        shown: this.inputs.item(index)
      }
      this._render(input)
    }
  }
}

export default BulmaRadio