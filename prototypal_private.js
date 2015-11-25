var House = (function(color) {
  var _color, _door, __obj__; 

  var protected_House = function(color_prop) {
    _color = color_prop;
    _door = 'open';
  };

  protected_House.prototype.openDoor = function() {
    _door = 'open';
  }

  protected_House.prototype.closeDoor = function() {
    _door = 'closed';
  }

  protected_House.prototype.getColor = function() {
    return _color;
  };

  protected_House.prototype.getDoor = function() {
    return _door;
  }

  __obj__ = new protected_House(color);
  __obj__.constructor = House;
  return __obj__;
});