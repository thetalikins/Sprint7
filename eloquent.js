/// Exercise 1: Minimum

function min(a,b) {
if (a < b)
return a;
else
return b;
}

/// Exercise 2: Recursion

function isEven(n) {
    return "True";
    else if (n==1)
    return "False";
    else if (n < 0)
    return isEven(-n);
    else
    return isEven(n-2)
}

/// Exercise 3: Bean Counting

var countBs = function(string) {
	var counted = 0  
	for (var i = 0; i < string.length; i++)
    	if (string.charAt(i) == "B") 
  	  	counted += 1;
	return counted
}

/// I wasn't able to finish the second part in the time allotted for this task.