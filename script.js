function firstWord(s) {
  // your code here
	let s_array = s.trim().split(' ');

	return s_array[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
