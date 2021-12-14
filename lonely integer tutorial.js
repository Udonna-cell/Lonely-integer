let arr = [0,0,1,1,2,3,2];
let getLonely = lonelyInteger(arr);

function lonelyInteger(arrayIntegers) {
  
	//let store the integers that are double in the array
	
	let storeDuplicate = [];
	
	// filtering the array not to have double integers
	
	let arrayFilter = arrayIntegers.filter(function (value, position){
	  
		//Getting the last integer of every value in the array.
		
	let lastIndex = arrayIntegers.lastIndexOf(value);
	
	// check if position is equal to last index and return it value.
	
	// To avoid getting double integer.
	
	if(position == lastIndex){
		return value;
	} else {
		// store the integers that the position is to equal to the last index.
		
		storeDuplicate.push(value);
	}
});

// convert storeDuplicate to string so  it will be easier to work with.

storeDuplicate.toString();

// let create an array variable to store the lonely integers.

let lonely = [];

// Looping through to check for lonely integer.

arrayFilter.forEach(function (only){
  
	if (!(storeDuplicate.includes(only))) {
		lonely.push(only);
	}
})

return lonely;
};

console.log(getLonely);