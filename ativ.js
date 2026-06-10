// CÓDIGO ORIGINAL - refatorar aplicando Clean Code
function f(l) {
let r = [];
for (let i = 0; i < l.length; i++) {
if (l[i].p > 50 && l[i].p < 200) {
if (l[i].s > 0) {
let x = l[i].p * 0.9;
r.push({ n: l[i].n, op: l[i].p, np: x, d: l[i].p - x });
}
}
}
return r;
}
let data = [
{ n: "Camiseta", p: 79.9, s: 10 },
{ n: "Meias", p: 19.9, s: 50 },
{ n: "Jaqueta", p: 299.9, s: 0 },
{ n: "Calça", p: 149.9, s: 5 },
{ n: "Boné", p: 59.9, s: 20 }
];
console.log(f(data));