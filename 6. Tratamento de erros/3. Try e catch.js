class SpaceshipWeapon {
  constructor(identifier) {
    this.identifier = identifier;
    this.shotleft = 5;
  }

  shot() {
    if (this.shotleft > 0) {
      console.log("Bang!!!");
      this.shotleft -= 1;
    } else {
      throw new Error("Arma sem munição");
    }
  }
  reload() {
    this.shotleft = 5;
  }
}

let fenixWeapon = new SpaceshipWeapon(10);

  try {
    fenixWeapon.shot();
    fenixWeapon.shot();
    fenixWeapon.shot();
    fenixWeapon.shot();
    fenixWeapon.shot();
    fenixWeapon.shot();
  } catch (e) {
      console.log(e.message);
      fenixWeapon.reload();
  } finally {
      console.log("Recarregando arma");
  }
  console.log(fenixWeapon);
