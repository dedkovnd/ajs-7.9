// TODO: write your code here
import sum from './basic';
//
// console.log('worked');
//
// console.log(sum([1, 2]));

class Character {
  constructor(props) {
    this.name = props.name
    this.attack = props.attack
    this.defence = props.defence
    this.level = 1
    this.health = 100
  }
}

class Magician extends Character {
  constructor(){
    super({name:"Magician", attack: 10, defence: 40})
  }
  get damage(){
    return this.attack;
  }
  set damage(square){
    let index = (10 - (square - 1))/10
    this.attack = this.attack*index;
  }
  get stoned(){
    return this.attack;
  }
  set stoned(square){
    this.damage = square;
    this.attack = this.attack - (Math.log2(square)*5)
  }
}

class Daemon extends Character {
  constructor(){
    super({name:"Daemon", attack: 10, defence: 40})
  }
  get damage(){
    return this.attack;
  }
  set damage(square){
    let index = (10 - (square - 1))/10
    this.attack = this.attack*index;
  }
  get stoned(){
    return this.attack;
  }
  set stoned(square){
    this.damage = square;
    this.attack = this.attack - (Math.log2(square)*5)
  }
}

/////////////////
class Validator {
  constructor(name) {
    this.name = name;
  }
  validateUserName(){
    if (this.name.match(/^[\d-_]|[\d]$/gmi) !== null) {
      return "invalide name"
    }
    if (this.name.match(/\d{4,}/gmi) !== null) {
      return "invalide name"
    }
    if(this.name.match(/[^\w\d-]/gmi) === null){
      console.log(this.name)
    } else {
      return "invalide name"
    }
  }
}
