// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack () {
    console.log(this.strength)
    return this.strength
  }
  receiveDamage (damage) {
    this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name
  }
  receiveDamage (damage) {
    super.receiveDamage (damage);
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }

}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage (damage);
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
  

}

// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    
    const damage = randomSaxon.receiveDamage(randomViking.attack());
    if (randomSaxon.health <= 0){
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return damage;
  }
  saxonAttack() {
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    
    const damage = randomViking.receiveDamage(randomSaxon.attack());
    if (randomViking.health <= 0){
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    return damage;
  }
  showStatus() {
    const arr = []
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`
    } else 
      return `Vikings and Saxons are still in the thick of battle.`
  }
}

class vikingArmy extends War {
  addViking(viking) {

  }
}

class saxonArmy extends War {
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

function random (array) {
  return array[Math.floor(Math.random() * array.length)];
};

