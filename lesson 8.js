//1
if (!("a" in window)) {
    var a = 1;
} 
alert(a); 

//2
var b = function a(x) {
    x && a(--x);
};
alert(a);

//3
function a(x) {
    return x * 2;
}
var a;
alert(a);

//4
function b(x, y, a) {
    arguments[2] = 10;
    alert(a); 
}
b(1, 2, 3);

//5
function a() {
    alert(this);
}
a.call(null);
