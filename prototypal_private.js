var House = (function(color) {
  var _color, _door, __obj__; 

  var H = function(color_prop) {
    _color = color_prop;
    _door = 'open';
  };

  H.prototype.openDoor = function() {
    _door = 'open';
  }

  H.prototype.closeDoor = function() {
    _door = 'closed';
  }

  H.prototype.getColor = function() {
    return _color;
  };

  H.prototype.getDoor = function() {
    return _door;
  }

  __obj__ = new H(color);
  __obj__.constructor = House;
  return __obj__;
});