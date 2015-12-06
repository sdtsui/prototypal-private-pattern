$traceurRuntime.ModuleStore.getAnonymousModule(function(require) {
  "use strict";
  var SimpleCoords = $traceurRuntime.initTailRecursiveFunction(function() {
    return $traceurRuntime.call(function() {
      function SimpleCoords(x, y) {
        this.x = x;
        this.y = y;
      }
      return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [SimpleCoords, {}, {}]);
    }, this, arguments);
  })();
  console.log("_____Separator_______");
  console.log("_____Between_______");
  console.log("_____Examples_______");
  var House = $traceurRuntime.initTailRecursiveFunction(function() {
    return $traceurRuntime.call(function() {
      function House(color_prop) {
        this.color = color_prop;
        this.door = 'open';
      }
      return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [House, {
        openDoor: function() {
          this.door = 'open';
        },
        closeDoor: function() {
          this.door = 'closed';
        },
        getColor: function() {
          return this.color;
        },
        getDoor: function() {
          return this.door;
        }
      }, {}]);
    }, this, arguments);
  })();
  return {};
});
//# sourceURL=traceured.js