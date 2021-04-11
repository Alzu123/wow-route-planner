class Point {
  constructor(x, y, continent) {
    this.x = x
    this.y = y
    this.continent = continent
  }

  distanceTo(point) {
    if (point.continent) {
      const polygons = point.continent.unreachableAreas
      if (polygons) {
        for (const polygon of polygons) {
          if (point.isInside(polygon) === !this.isInside(polygon)) {
            return Number.POSITIVE_INFINITY
          }
        }
      }
    }
    
    if (this.continent && point.continent) {
      if (this.continent.name !== point.continent.name) {
        return Number.POSITIVE_INFINITY
      }
    }
    
    const dx = this.x - point.x
    const dy = this.y - point.y

    return Math.hypot(dx, dy) // in coordinate units
  }

  // From: https://stackoverflow.com/questions/22521982/check-if-point-is-inside-a-polygon
  isInside(polygon) {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html

    // Really here should also be polygon[0].continent.name but I'm using a string as a continent there instead of Point.continent because I don't know how to reference it without circular references (see ContinentDB.js)
    if (this.continent.name !== polygon[0].continent) {
      return false
    }
    
    const x = this.x
    const y = this.y;
    
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        let xi = polygon[i].x
        let yi = polygon[i].y

        let xj = polygon[j].x
        let yj = polygon[j].y
        
        let intersect = ((yi > y) !== (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)

        if (intersect) {
          inside = !inside
        }
    }
    
    return inside
  }
}

export default Point