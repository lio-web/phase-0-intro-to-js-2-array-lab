// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    return[...cats, name];
}
function prependCat(Arnold){
    return [Arnold, ...cats];
}
function removeLastCat(){
    return cats.slice(0, -1);
}
function removeFirstCat() {
    return cats.slice(1);
}