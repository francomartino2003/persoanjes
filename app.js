class Personaje {
  constructor(vidamin, vidamax, armaduramin, armaduramax, ataquemin, ataquemax, nombre) {
    this.vida = Math.round(Math.random() * (vidamax - vidamin) + vidamin);
    this.armadura = Math.round(Math.random() * (armaduramax - armaduramin) + armaduramin);
    this.ataque = Math.round(Math.random() * (ataquemax - ataquemin) + ataquemin);
    this.nombre = nombre;
  }

  atacar(personaje) {
    personaje.vida = personaje.vida + personaje.armadura - this.ataque;
  }

  primerAtaque(personaje){
    personaje.vida = personaje.vida + personaje.armadura - (this.ataque * 0,7);
  }
}

class Mago extends Personaje {
  constructor() {
    super(100, 200, 3, 9, 10, 20, "mago");
  }
}

class Caballero extends Personaje {
  constructor() {
    super(50, 150, 8, 9, 15, 25, "caballero");
  }
}

class Arquero extends Personaje {
  constructor() {
    super(30, 130, 4, 7, 15, 25, "Arquero");
  }
}


var mago1  = new Mago();
var caballero1 = new Caballero();
var arquero1 = new Arquero();
var mago2 = new Mago();

var unoContraUno = function(p1,p2){
  var player1 = null;
  var player2 = null;
  var random = Math.round(Math.random());
  if (random) {
    player1 = p1;
    player2 = p2;
  }else {
    player1 = p2;
    player2 = p1;
  }
  player1.primerAtaque(player2)

  do {
    player2.atacar(player1);
    if (player1.vida <= 0 || player2.vida <= 0 ) { break; }
    player1.atacar(player2);
  } while (player1.vida > 0 && player2.vida > 0);

  if (player1.vida > player2.vida) {
    return "ganador: " + player1.nombre;
  }else if (player2.vida > player1.vida) {
    return "ganador: " + player2.nombre;
  }else {
    return "error!";
  }
}
