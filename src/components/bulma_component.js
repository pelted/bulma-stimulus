class BulmaComponent extends Stimulus.Controller {
  static builder(templateFunction) {
    return function(data) {
      const dataKeys = []
      const dataVals = []
      for (let key in data) {
        dataKeys.push(key)
        dataVals.push(data[key])
      }
      let func = new Function(...dataKeys, 'return (' + templateFunction + ')();')
      return func(...dataVals)
    }
  }
}

export default BulmaComponent