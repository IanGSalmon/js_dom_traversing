/*
const say = something => {
    console.log(something);
}

const exec = (func, arg) => {
    func(arg);
}
*/


// Or, pass function def into function
/*
exec((something) => {
    console.log(something);
}, 'Greetings everyone');
*/

window.setTimeout((something) => {
    console.log(something);
}, 3000, 'Greetings everyone');