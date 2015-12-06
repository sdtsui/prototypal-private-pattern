Note to self:

Notes/Blog post TBD.  Need to explore use of extends to see where the sugar is. 


Source:
https://google.github.io/traceur-compiler/demo/repl.html#%2F%2F%20Options%3A%20--annotations%20--array-comprehension%20--async-functions%20--async-generators%20--exponentiation%20--export-from-extended%20--for-on%20--generator-comprehension%20--jsx%20--member-variables%20--proper-tail-calls%20--require%20--types%20%0A%0Aclass%20SimpleCoords%20%7B%0A%20%20constructor(x%2C%20y)%20%7B%0A%20%20%20%20this.x%20%3D%20x%3B%0A%20%20%20%20this.y%20%3D%20y%3B%0A%20%20%7D%0A%7D%0A%0A%0Aconsole.log(%22_____Separator_______%22)%3B%0Aconsole.log(%22_____Between_______%22)%3B%0Aconsole.log(%22_____Examples_______%22)%3B%0A%0A%0Aclass%20House%20%7B%0A%20%20%09constructor(color_prop)%20%7B%0A%20%20%20%20%09this.color%20%3D%20color_prop%3B%0A%20%20%20%20%09this.door%20%3D%20'open'%3B%0A%20%20%09%7D%0A%20%20%0A%20%20%09openDoor()%20%7B%0A%20%20%09%09this.door%20%3D%20'open'%3B%0A%09%7D%0A%0A%09closeDoor()%20%7B%0A%20%20%20%20%20%20%09this.door%20%3D%20'closed'%3B%0A%09%7D%0A%0A%09getColor()%20%7B%0A%20%20%20%20%20%20%09return%20this.color%3B%0A%09%7D%0A%0A%09getDoor()%20%7B%0A%20%20%20%20%20%20%09return%20this.door%3B%0A%09%7D%0A%09%0A%7D
