(function(self) {

  let exports
  if (self) {
    exports = self.sotnRando.presets
  } else {
    exports = [
      require('./safe'),
      require('./agonize'),
      require('./optimize'),
      require('./glitch'),
      require('./glitch-hard'),
    ]
  }
  exports.sort(function(a, b) {
    const weight = a.weight - b.weight
    if (weight === 0) {
      if (a.id < b.id) {
        return -1
      } else if (a.id > b.id) {
        return 1
      }
    }
    return weight
  })

  if (self) {
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      presets: exports,
    })
  } else {
    module.exports = exports
  }
})(typeof(self) !== 'undefined' ? self : null)
