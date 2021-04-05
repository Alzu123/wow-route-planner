class Continent {
  constructor(name, image, scale, type, isFlyable, unreachableAreas) {
    this.name = name
    if (image) {
      this.image = require(`./Images/${image}`)
    } else {
      this.image = null
    }
    this.scale = scale
    this.type = type // See https://wowpedia.fandom.com/wiki/Enum.UIMapType
    this.isFlyable = isFlyable
    this.unreachableAreas = unreachableAreas
  }
}

export default Continent