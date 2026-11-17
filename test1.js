"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.together = exports.x = void 0;
exports.add = add;
//variable
exports.x = 14;
//function
function add() {
    let a = 14;
    let b = 18;
    console.log(a + b);
}
//class
class together {
    couple1;
    couple2;
    constructor(couple1, couple2) {
        this.couple1 = couple1;
        this.couple2 = couple2;
        console.log(`Both ${couple1} and ${couple2} are married.`);
    }
    love() {
        console.log('Both are lived happly and together');
    }
}
exports.together = together;
