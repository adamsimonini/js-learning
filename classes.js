/**
 * @param {string} name - character name
 */

class Character {
	constructor(name) {
		this.name = name;
	}

	attack() {
		return this.baseAttack;
	}

	defend() {
		return this.baseDefense;
	}
}

/**
 * @param {Array} spells - an array of spells the wizard can cast
 */
class Wizard extends Character {
	constructor(name, spells) {
		super(name);
		this.spells = spells;
		this.baseHP = 50;
		this.baseDefense = 20;
		this.baseAttack = 70;
	}
}

const Theo = new Wizard("Theo", ["chain lightening", "blizzard", "inferno"]);

Theo.baseHP += -20;
console.log(Theo.baseHP);
console.log(Theo.attack());
