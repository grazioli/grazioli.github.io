function mail(){
	
	var email ='gmail.com@alessandro.grazioli81'
	
	var tempBefore = '';
	var tempAfter = '';
	var newString = '';
	var start = 0;
	var whereHash = email.indexOf ('@');
	
	for (count = 1; count <= whereHash; count ++){
		tempBefore += email.substring (start, count);
		start++;
	}
	
	start = whereHash;
	start++;
	whereHash += 2;
	
	for (count = whereHash; count <= email.length; count++){
		tempAfter += email.substring (start, count);
		start++;
	}
	
	newString = tempAfter +'@' + tempBefore;
	parent.location = 'mailto:' + newString + '?subject=Information Request';
}