class Personaje {
  constructor(vida, armadura, ataque, nombre) {
    this.vida = vida;
    this.armadura = armadura;
    this.ataque = ataque;
    this.nombre = nombre;
  }

  atacar(personaje) {
    personaje.vida = personaje.vida + personaje.armadura - this.ataque;
  }
}

class Mago extends Personaje {
  constructor() {
    super(150, 6, 15, "mago");
  }
}

class Caballero extends Personaje {
  constructor() {
    super(100, 10, 20, "caballero");
  }
}

class Arquero extends Personaje {
  constructor() {
    super(80, 6, 20, "Arquero");
  }
}

var play = function() {
  var p1 = new Arquero();
  var p2 = new Mago();

  // Sistema de turnos
  p1.atacar(p2);
  p2.atacar(p1);
}


var mago1  = new Mago();
var caballero1 = new Caballero();
var arquero1 = new Arquero();
var mago2 = new Mago();

var unoContraUno = function(p1,p2){
  do {
    p1.atacar(p2);
    p2.atacar(p1);
  } while (p1.vida > 0 && p2.vida > 0);
  if (p1.vida > p2.vida) {
    return "ganador: " + p1.nombre;
  }else if (p2.vida > p1.vida) {
    return "ganador: " + p2.nombre;
  }else {
    return "empate!";
  }
}
