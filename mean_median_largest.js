
function findMean(a,n)
{
	let sum = 0;
	for (let i = 0; i < n; i++)
		sum += a[i];

	return sum / n;
}


function findMedian(a,n)
{
	a.sort();

	if (n % 2 !== 0)
		return a[n / 2];

	return (a[Math.floor((n-1)/2)] +
			a[n / 2]) / 2;
}

function findLargest(a){

var largest= 0;

for (i=0; i<=largest;i++){
    if (a[i]>largest) {
        largest=a[i];
    }
}
return largest;
}

let a = [1, 3, 4, 2, 7, 5, 8, 6]
let n = a.length;


console.log("Mean = " + findMean(a, n));
console.log("Median = " + findMedian(a, n));
console.log("Median = " + findLargest(a));