// Write your solution here!
let cats = ["Milo" , "Otis" , "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat (name) {
    return cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}
function appendCat(name) {
    return cats.concat(name);
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat(name) {
    return cats.slice(0, -1);
}
function removeFirstCat(name) {
    return cats.slice(1);
}