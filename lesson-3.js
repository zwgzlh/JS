
//задание 1
nextPrime:
for (var i = 2; i <= 100; i++) {

for (var j = 2; j < i; j++) {
if (i % j == 0) continue nextPrime;
    }

alert (i);

   }
// задание 2
var basket = [
    ["Оправа", 12000, 1],
    ["Линзы", 5000, 2]
 ];

function countBasketPrice (basket){
	var sum = 0;

	for (var i = 0; i< basket.length; i++) {
		sum += basket[i][1] * basket[i][2]
	}

	return sum;
}
console.log (countBasketPrice(basket));



//задание 3
var i;
for ( i = 0; i <= 9; i++){
console.log(i);
    }

//задание 4
for ( var str = 'x', i = 0; i < 20;  i++) {
	console.log (str);
	str += 'x';

}
