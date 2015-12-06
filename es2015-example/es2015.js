// Options: --annotations --array-comprehension --async-functions --async-generators --exponentiation --export-from-extended --for-on --generator-comprehension --jsx --member-variables --proper-tail-calls --require --types 

class SimpleCoords {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


console.log("_____Separator_______");
console.log("_____Between_______");
console.log("_____Examples_______");


class House {
    constructor(color_prop) {
      this.color = color_prop;
      this.door = 'open';
    }
  
    openDoor() {
      this.door = 'open';
  }

  closeDoor() {
        this.door = 'closed';
  }

  getColor() {
        return this.color;
  }

  getDoor() {
        return this.door;
  }
  
}