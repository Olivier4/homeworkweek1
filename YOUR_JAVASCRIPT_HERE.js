
// Hero object
let hero = {
    name: "Lummel",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: { 
        type: "", 
        damage: 2 
    }
}
// Game logic functions

// rest function hero
function rest(person){
    if (person.health === 10) {
        window.alert("rested")
    }
    person.health = 10
    hero.health = 10
    return person
}
// function to pick up items
function pickUpItem(person, weapon){
    person.inventory.push(weapon)
}

// function to equip weapon
function equipWeapon(person){
    if (person.inventory.length > 0 ) {
        person.weapon = person.inventory[0]
    }
}

// Set onlick event on inn element
let innElement= document.getElementById("inn")
innElement.onclick = rest

// Set onlick event on dagger element
let daggerElement= document.getElementById("dagger")
let dagger ={ type: "dagger", damage: 2 }
daggerElement.onclick = function(){
    hero.inventory.push(dagger)
}

// Set onlick event on bag element
let bagElement = document.getElementById("bag")
bagElement.onclick = function(){
    equipWeapon(hero)
}
