const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
<<<<<<< HEAD
  kittens = kittens.slice(1)
  return kittens
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
=======
  kittens.slice(1)
  return kittens
}
>>>>>>> fae7fb184edcf0f5e108d3bea4144edd7f5333b5
